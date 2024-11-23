import React, { useState } from 'react';
import { useTonConnect } from '../hooks/useTonConnect';
import { useAnimalLottery } from '../hooks/useAnimalLottery';
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from './styled/styled';
import { ANIMALS } from '../constants/animals';

export function BetForm() {
  const { connected } = useTonConnect();
  const { placeBet, currentDraw } = useAnimalLottery();
  const [selectedAnimal, setSelectedAnimal] = useState(0);
  const [amount, setAmount] = useState('1');
  const [isLoading, setIsLoading] = useState(false);

  const handleBet = async () => {
    if (!connected || isLoading) return;

    try {
      setIsLoading(true);
      await placeBet(selectedAnimal + 1, amount);
      setAmount('1');
      setSelectedAnimal(0);
    } catch (error) {
      console.error('Erro ao realizar aposta:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <FlexBoxCol>
        <h3>Realizar Aposta</h3>
        
        <FlexBoxRow>
          <label>Animal</label>
          <select 
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(Number(e.target.value))}
            disabled={!connected || isLoading}
          >
            {ANIMALS.map((animal, index) => (
              <option key={index} value={index}>
                {animal} ({index + 1})
              </option>
            ))}
          </select>
        </FlexBoxRow>

        <FlexBoxRow>
          <label>Valor (TON)</label>
          <Input
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={!connected || isLoading}
          />
        </FlexBoxRow>

        {currentDraw && (
          <FlexBoxRow className="draw-info">
            <span>Sorteio Atual: #{currentDraw.id}</span>
            <span>Prêmio Total: {Number(currentDraw.totalPrize) / 1e9} TON</span>
          </FlexBoxRow>
        )}

        <Button
          disabled={!connected || isLoading}
          onClick={handleBet}
        >
          {isLoading ? 'Processando...' : 'Apostar'}
        </Button>
      </FlexBoxCol>
    </Card>
  );
}