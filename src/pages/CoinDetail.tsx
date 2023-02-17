import {
  Box, Flex, Image, Table, Text, Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../api';
import BackToHomeButton from '../components/BackToHomeButton';
import PageWrapper from '../components/PageWrapper';
import PriceChangeBadge from '../components/PriceChangeBadge';
import Spinner from '../components/Spinner';
import TableRow from '../components/TableRow';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';
import { formatCoinPrice, priceToKMB } from '../utils';
import NotFound from './NotFound';

function CoinDetails() {
  const { coinId } = useParams();
  const { coins } = useSelector((state: RootState) => state.coins);

  const [coinData, setCoinData] = useState<Coin | null>(null);
  const [coinLoaded, setCoinLoaded] = useState(false);

  useEffect(() => {
    const fetchCoin = async () => {
      const selectedCoin: Coin = coins.length > 0
        ? coins.filter((coin) => coin.id === coinId)[0]
        : (await getCoin({ coinId: coinId! })).coin;
      setCoinData(selectedCoin);
      setCoinLoaded(true);
    };
    fetchCoin();
  }, [coinId, coins]);

  if (!coinLoaded) return <Spinner />;
  if (!coinData) return <NotFound />;

  const {
    name,
    symbol,
    price,
    priceChange1d,
    marketCap,
    volume,
    availableSupply,
    totalSupply,
  } = coinData;

  return (
    <PageWrapper>
      <Flex align="center" columnGap="1rem" my="xl">
        <BackToHomeButton />
        <Title order={2} fw="500">
          Market Stats
        </Title>
      </Flex>
      <Box p="xl">
        <Flex align="center" columnGap="sm">
          <Image src={coinData.icon} width="4rem" />
          <Flex direction="column" gap="4px">
            <Title order={3} fw="700">
              {name}
              {' '}
              (
              {symbol}
              )
            </Title>
            <Flex align="center" columnGap="xs">
              <Text size="xl" fw="700">
                {formatCoinPrice(price)}
              </Text>
              <PriceChangeBadge priceChange={priceChange1d} />
            </Flex>
          </Flex>
        </Flex>
        <Box my="md">
          <Table striped withBorder verticalSpacing="lg" my="xl">
            <tbody>
              <TableRow label="Volume (24h)" value={priceToKMB(volume)} />
              <TableRow label="Market Cap" value={priceToKMB(marketCap)} />
              <TableRow
                label="Fully Dilluted Valuation"
                value={priceToKMB(totalSupply * price)}
              />
              <TableRow
                label="Circulating Supply"
                value={priceToKMB(availableSupply)}
              />
              <TableRow
                label={`Total Supply (${symbol})`}
                value={totalSupply}
              />
            </tbody>
          </Table>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default CoinDetails;
