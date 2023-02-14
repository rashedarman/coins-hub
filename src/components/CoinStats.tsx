import {
  Box,
  DefaultProps,
  Divider,
  Flex,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { Coin } from '../interfaces';
import { priceToKMB } from '../utils';

interface Props extends DefaultProps {
  coin: Coin;
}

function CoinStats(props: Props) {
  const { coin, ...styleProps } = props;

  return (
    <Box {...styleProps} sx={{ marginTop: '2.5rem' }}>
      <Title order={3} fw="600" m="xs">
        Market Stats
      </Title>
      <Paper withBorder radius="lg" sx={{ padding: '1.875rem' }}>
        <Flex justify="space-between">
          <Flex direction="column">
            <Text color="dimmed" fw="600">
              Market Cap
            </Text>
            <Text fw="500" fz="xl">
              {priceToKMB(coin.marketCap)}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text color="dimmed" fw="600">
              Fully Dilluted Valuation
            </Text>
            <Text fw="500" fz="xl">
              $
              {priceToKMB(coin.totalSupply * coin.price)}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text color="dimmed" fw="600">
              Circulating Supply
            </Text>
            <Text fw="500" fz="xl">
              $
              {coin.availableSupply.toLocaleString()}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text color="dimmed" fw="600">
              Total Supply
            </Text>
            <Text fw="500" fz="xl">
              $
              {coin.totalSupply}
            </Text>
          </Flex>
          <Flex direction="column">
            <Text color="dimmed" fw="600">
              Volume 24h
            </Text>
            <Text fw="500" fz="xl">
              $
              {priceToKMB(coin.volume)}
            </Text>
          </Flex>
        </Flex>

        <Divider sx={{ margin: '2.5rem auto' }} />

        <Box>
          <Title order={4} fw="400" mb="lg">
            {coin.name}
            {' '}
            Price Update
          </Title>
          <Text>
            {coin.name}
            {' '}
            <b>
              price is $
              {coin.price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              ,
              {' '}
              {coin.priceChange1d < 0 ? 'down' : 'up'}
              {' '}
              {Math.abs(coin.priceChange1d).toFixed(2)}
              %
              {' '}
            </b>
            in the last 24 hours, and the live market cap is
            {' '}
            <b>
              $
              {priceToKMB(coin.marketCap)}
            </b>
            . It has circulating
            {' '}
            <b>
              supply volume of $
              {coin.availableSupply.toLocaleString()}
              {' '}
              {coin.symbol}
            </b>
            {' '}
            coins and a max. supply volume of
            {' '}
            {coin.totalSupply}
            {' '}
            alongside $
            {priceToKMB(coin.volume)}
            {' '}
            24h trading volume.
          </Text>
        </Box>
      </Paper>
    </Box>
  );
}

export default CoinStats;
