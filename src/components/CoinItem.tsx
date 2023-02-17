import { Card, Text } from '@mantine/core';
import { Coin } from '../interfaces';

interface Props {
  coin: Coin;
}

function CoinItem(props: Props) {
  const { coin } = props;

  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text>{coin.name}</Text>
      </Card>
    </div>
  );
}

export default CoinItem;
