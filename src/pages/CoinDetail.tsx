import {
  Box, Flex, Image, Table, Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../api';
import BackToHomeButton from '../components/BackToHomeButton';
import PageWrapper from '../components/PageWrapper';
import Spinner from '../components/Spinner';
import TableRow from '../components/TableRow';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';
import { priceToKMB } from '../utils';
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
    marketCap,
    volume,
    availableSupply,
    totalSupply,
  } = coinData;

  return (
    <PageWrapper>
      <Flex align="center" columnGap="1rem" my="xl">
        <BackToHomeButton />
        <Title order={2} fw="600">
          Market Stats
        </Title>
      </Flex>
      <Box p="xl">
        <Flex align="center">
          <Image src={coinData.icon} width="3rem" />
          <Title order={3} ml="xl" fw="700">
            {name}
            {' '}
            (
            {symbol}
            )
          </Title>
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
              <TableRow label="Total Supply" value={totalSupply} />
            </tbody>
          </Table>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default CoinDetails;
