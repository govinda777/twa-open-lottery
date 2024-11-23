import React, { useState } from 'react';
import { useAnimalLottery } from '../hooks/useAnimalLottery';
import { useTonConnect } from '../hooks/useTonConnect';
import { Card, FlexBoxCol, FlexBoxRow, Button } from './styled/styled';
import { ANIMALS } from '../constants/animals';

export function BankerDashboard() {
  const { connected, isOwner } = useTonConnect();
  const { currentDraw, processDraw } = useAnimalLottery();
  const [selectedWinner, setSelectedWinner] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessDraw = async () => {
    if (!connected || isProcessing || !currentDraw) return;

    try {
      setIsProcessing(true);
      await processDraw(selectedWinner);
    } catch (error) {
      console.error('Erro ao processar sorteio:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Só exibe o dashboard se for o owner
  if (!isOwner) {
    return null;
  }

  return (
    <Card>
      <FlexBoxCol>
        <h3>Painel do Administrador</h3>

        {currentDraw && !currentDraw.processed && (
          <>
            <FlexBoxRow className="draw-info">
              <span>Sorteio Atual: #{currentDraw.id}</span>
              <span>Prêmio Total: {Number(currentDraw.totalPrize) / 1e9} TON</span>
            </FlexBoxRow>

            <FlexBoxRow>
              <label>Animal Vencedor</label>
              <select
                value={selectedWinner}
                onChange={(e) => setSelectedWinner(Number(e.target.value))}
                disabled={!connected || isProcessing}
              >
                {ANIMALS.map((animal, index) => (
                  <option key={index} value={index + 1}>
                    {animal}
                  </option>
                ))}
              </select>
            </FlexBoxRow>

            <Button
              onClick={handleProcessDraw}
              disabled={!connected || isProcessing}
            >
              {isProcessing ? 'Processando...' : 'Realizar Sorteio'}
            </Button>
          </>
        )}

        {currentDraw?.processed && (
          <FlexBoxRow>
            <span>
              Último sorteio finalizado. Aguardando próximo período de apostas...
            </span>
          </FlexBoxRow>
        )}
      </FlexBoxCol>
    </Card>
  );
}