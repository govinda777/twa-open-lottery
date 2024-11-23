import React from 'react';
import { useAnimalLottery } from '../hooks/useAnimalLottery';
import { useTonConnect } from '../hooks/useTonConnect';
import { Card, FlexBoxCol, FlexBoxRow, Button } from './styled/styled';
import { ANIMALS } from '../constants/animals';
import type { BetData } from '../contracts/animalLottery';

export function DrawList() {
  const { connected } = useTonConnect();
  const { currentDraw, currentBets, claimPrize } = useAnimalLottery();
  const [claimingPrize, setClaimingPrize] = useState(false);

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  const handleClaimPrize = async () => {
    if (!currentDraw || !connected) return;
    
    try {
      setClaimingPrize(true);
      await claimPrize(currentDraw.id);
    } catch (error) {
      console.error('Erro ao resgatar prêmio:', error);
    } finally {
      setClaimingPrize(false);
    }
  };

  const renderBetsList = (bets: BetData[]) => (
    <div className="bets-table">
      <FlexBoxRow className="header">
        <span>Animal</span>
        <span>Valor</span>
        <span>Apostador</span>
        <span>Horário</span>
      </FlexBoxRow>
      
      {bets.map((bet, index) => (
        <FlexBoxRow key={index} className="bet-row">
          <span>{ANIMALS[bet.animal - 1]}</span>
          <span>{Number(bet.amount) / 1e9} TON</span>
          <span className="address">{bet.player.toString().slice(0, 8)}...</span>
          <span>{formatTimestamp(bet.timestamp)}</span>
        </FlexBoxRow>
      ))}
    </div>
  );

  if (!currentDraw) {
    return (
      <Card>
        <FlexBoxCol>
          <h3>Lista de Apostas</h3>
          <span>Carregando informações do sorteio...</span>
        </FlexBoxCol>
      </Card>
    );
  }

  return (
    <Card>
      <FlexBoxCol>
        <h3>Sorteio #{currentDraw.id}</h3>

        <FlexBoxRow className="draw-info">
          <span>
            Status: {currentDraw.processed ? 'Finalizado' : 'Em Andamento'}
          </span>
          <span>
            Prêmio Total: {Number(currentDraw.totalPrize) / 1e9} TON
          </span>
        </FlexBoxRow>

        {currentDraw.processed && (
          <FlexBoxRow className="winner-info">
            <span>
              Animal Vencedor: {ANIMALS[currentDraw.winningAnimal - 1]}
            </span>
            <Button
              onClick={handleClaimPrize}
              disabled={!connected || claimingPrize}
            >
              {claimingPrize ? 'Processando...' : 'Resgatar Prêmio'}
            </Button>
          </FlexBoxRow>
        )}

        <h4>Apostas Realizadas</h4>
        {currentBets && currentBets.length > 0 ? (
          renderBetsList(currentBets)
        ) : (
          <span>Nenhuma aposta realizada ainda</span>
        )}
      </FlexBoxCol>
    </Card>
  );
}