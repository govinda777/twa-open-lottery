import {
    Contract,
    ContractProvider,
    Sender,
    Address,
    Cell,
    beginCell,
    toNano,
    fromNano,
  } from "ton-core";
  
  export interface DrawData {
    id: number;
    winningAnimal: number;
    totalPrize: bigint;
    timestamp: number;
    processed: boolean;
  }
  
  export interface BetData {
    animal: number;
    amount: bigint;
    player: Address;
    timestamp: number;
  }
  
  export default class AnimalLottery implements Contract {
    constructor(
      readonly address: Address,
      readonly init?: { code: Cell; data: Cell }
    ) {}
  
    async placeBet(
      provider: ContractProvider,
      via: Sender,
      animal: number,
      amount: string
    ) {
      if (animal < 1 || animal > 25) {
        throw new Error("Animal number must be between 1 and 25");
      }
  
      const messageBody = beginCell()
        .storeUint(1, 32) // op: place_bet
        .storeUint(0, 64) // query_id
        .storeUint(animal, 8)
        .endCell();
  
      await provider.internal(via, {
        value: toNano(amount),
        body: messageBody,
      });
    }
  
    async claimPrize(
      provider: ContractProvider,
      via: Sender,
      drawId: number
    ) {
      const messageBody = beginCell()
        .storeUint(2, 32) // op: claim_prize
        .storeUint(0, 64) // query_id
        .storeUint(drawId, 32)
        .endCell();
  
      await provider.internal(via, {
        value: toNano("0.05"), // gas fee
        body: messageBody,
      });
    }
  
    async processDraw(
      provider: ContractProvider,
      via: Sender,
      winningAnimal: number
    ) {
      const messageBody = beginCell()
        .storeUint(3, 32) // op: process_draw
        .storeUint(0, 64) // query_id
        .storeUint(winningAnimal, 8)
        .endCell();
  
      await provider.internal(via, {
        value: toNano("0.05"), // gas fee
        body: messageBody,
      });
    }
  
    async getCurrentDraw(provider: ContractProvider): Promise<DrawData> {
      const { stack } = await provider.get("get_current_draw", []);
      return {
        id: stack.readNumber(),
        winningAnimal: stack.readNumber(),
        totalPrize: stack.readBigNumber(),
        timestamp: stack.readNumber(),
        processed: stack.readBoolean(),
      };
    }
  
    async getBets(provider: ContractProvider): Promise<BetData[]> {
      const { stack } = await provider.get("get_bets", []);
      const bets: BetData[] = [];
      const count = stack.readNumber();
      
      for (let i = 0; i < count; i++) {
        bets.push({
          animal: stack.readNumber(),
          amount: stack.readBigNumber(),
          player: stack.readAddress(),
          timestamp: stack.readNumber(),
        });
      }
      
      return bets;
    }
  }