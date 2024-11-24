import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import AnimalLottery, { DrawData, BetData } from "../contracts/animalLottery";

export function useAnimalLottery() {
  const { wallet, sender, connected } = useTonConnect();
  const { client } = useTonClient();

  const lotteryContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new AnimalLottery(
      Address.parse("EQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_b7Y")
    );
    return client.open(contract) as OpenedContract<AnimalLottery>;
  }, [client]);

  const { data: currentDraw, isLoading: isLoadingDraw } = useQuery({
    queryKey: ["currentDraw"],
    queryFn: async () => {
      if (!lotteryContract) return null;
      return await lotteryContract.getCurrentDraw();
    },
    refetchInterval: 5000,
    enabled: !!lotteryContract,
  });

  const { data: currentBets, isLoading: isLoadingBets } = useQuery({
    queryKey: ["bets"],
    queryFn: async () => {
      if (!lotteryContract) return null;
      return await lotteryContract.getBets();
    },
    refetchInterval: 5000,
    enabled: !!lotteryContract,
  });

  return {
    connected,
    currentDraw: isLoadingDraw ? null : currentDraw,
    currentBets: isLoadingBets ? null : currentBets,
    placeBet: async (animal: number, amount: string) => {
      if (!lotteryContract || !client) throw new Error("Contract not initialized");
      return await lotteryContract.placeBet(client.provider, sender, animal, amount);
    },
    claimPrize: async (drawId: number) => {
      if (!lotteryContract || !client) throw new Error("Contract not initialized");
      return await lotteryContract.claimPrize(client.provider, sender, drawId);
    },
    processDraw: async (winningAnimal: number) => {
      if (!lotteryContract || !client) throw new Error("Contract not initialized");
      return await lotteryContract.processDraw(client.provider, sender, winningAnimal);
    },
  };
}