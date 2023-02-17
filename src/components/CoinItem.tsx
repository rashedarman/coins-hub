import {
  Badge, Card, Flex, Image, Text,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Coin } from '../interfaces';
import { formatCoinPrice } from '../utils';
import PriceChangeBadge from './PriceChangeBadge';

interface Props {
  coin: Coin;
}

function CoinItem(props: Props) {
  const {
    coin: {
      id, name, symbol, icon, rank, price, priceChange1d,
    },
  } = props;

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/coins/${id}`)}
      radius="md"
      p="md"
      withBorder
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s linear',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
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
