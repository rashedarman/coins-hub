import {
  Badge, Box, Center, Flex,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../api';
import BackToHomeButton from '../components/BackToHomeButton';
import CoinPriceWidget from '../components/CoinPriceWidget';
import MarketStats from '../components/MarketStats';
import PageWrapper from '../components/PageWrapper';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';
import NotFound from './NotFound';

function CoinDetails() {
  const { coinId } = useParams();
  const { coins } = useSelector((state: RootState) => state.coins);

  const [coinData, setCoinData] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchCoin = async () => {
      const selectedCoin: Coin = coins.length > 0
        ? coins.filter((coin) => coin.id === coinId)[0]
        : (await getCoin({ coinId: coinId! })).coin;
      setCoinData(selectedCoin);
    };
    fetchCoin();
  }, [coinId, coins]);

  if (!coinData) return <NotFound />;

  return (
    <PageWrapper>
      <Box py="md">
        <Badge color="orange" radius="sm" variant="filled" my="xl">
          RANK #
          {coinData.rank}
        </Badge>
        <Flex direction="column" sx={{ rowGap: '2.5rem' }}>
          <CoinPriceWidget coin={coinData} />
          <MarketStats coin={coinData} />
        </Flex>
        <Center my="xl">
          <BackToHomeButton />
        </Center>
      </Box>
    </PageWrapper>
  );
}

export default CoinDetails;
