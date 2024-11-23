import React, { useState } from 'react';
import { Address, toNano } from 'ton-core';
import { useTonConnect } from '../hooks/useTonConnect';
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from './styled/styled';

export function TransferTon() {
  const { sender, connected } = useTonConnect();
  const [tonAmount, setTonAmount] = useState('0.01');
  const [tonRecipient, setTonRecipient] = useState('EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c');
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = async () => {
    try {
      setIsLoading(true);
      await sender.send({
        to: Address.parse(tonRecipient),
        value: toNano(tonAmount),
      });
    } catch (error) {
      console.error('Error transferring TON:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <FlexBoxCol>
        <h3>Transferir TON</h3>
        <FlexBoxRow>
          <label>Quantidade</label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
            disabled={!connected || isLoading}
            min="0.01"
            step="0.01"
          />
        </FlexBoxRow>
        <FlexBoxRow>
          <label>Destinatário</label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
            disabled={!connected || isLoading}
            placeholder="Endereço TON"
          />
        </FlexBoxRow>
        <Button
          disabled={!connected || isLoading}
          onClick={handleTransfer}
        >
          {isLoading ? 'Processando...' : 'Transferir'}
        </Button>
      </FlexBoxCol>
    </Card>
  );
}