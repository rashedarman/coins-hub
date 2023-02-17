import {
  Badge, Card, Flex, Image, Text,
} from '@mantine/core';
import { Coin } from '../interfaces';
import { formatCoinPrice } from '../utils';
import PriceChangeBadge from './PriceChangeBadge';

interface Props {
  coin: Coin;
}

function CoinItem(props: Props) {
  const {
    coin: {
      name, symbol, icon, rank, price, priceChange1d,
    },
  } = props;

  return (
    <Card shadow="sm" p="md" radius="md" withBorder>
      <Flex justify="space-between">
        <Image src={icon} width="60px" />
        <Badge color="gray" radius="sm" variant="filled">
          RANK #
          {rank}
        </Badge>
      </Flex>
      <Text weight={600} mt="lg" mb="xs">
        {name}
        {' '}
        (
        {symbol}
        )
      </Text>
      <Flex align="center" gap="sm">
        <Text weight={700}>{formatCoinPrice(price)}</Text>
        <PriceChangeBadge priceChange={priceChange1d} />
      </Flex>
    </Card>
  );
}

export default CoinItem;
