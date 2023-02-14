import {
  Box, DefaultProps, Flex, Image, Text, Title,
} from '@mantine/core';
import { Coin } from '../interfaces';
import PriceChangeBadge from './PriceChangeBadge';

interface Props extends DefaultProps {
  coin: Coin;
}

const CoinPrice = (props: Props) => {
  const {
    coin: {
      icon, name, symbol, price, priceChange1d,
    },
    ...styleProps
  } = props;

  return (
    <Flex direction="column" gap="xs" {...styleProps}>
      <Flex align="center">
        <Image src={icon} alt={name} mr="sm" width="2.5rem" />
        <Title order={1} size="h3" tt="capitalize" fw={600}>
          {name}
          {' '}
          Price
        </Title>
        <Text ml="md" color="dimmed" fw="500" sx={{ marginLeft: '.375rem' }}>
          {symbol}
        </Text>
      </Flex>
      <Flex align="center">
        <Title order={3} size="h2" fw="600">
          $
          {price < 1
            ? price.toFixed(6)
            : price.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
        </Title>
        <Box ml="sm">
          <PriceChangeBadge priceChange={priceChange1d} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CoinPrice;
