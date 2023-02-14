import { Badge, Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../api';
import BackToHomeButton from '../components/BackToHomeButton';
import CoinPrice from '../components/CoinPrice';
import CoinStats from '../components/CoinStats';
import PageWrapper from '../components/PageWrapper';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';

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

  if (!coinData) return null;

  return (
    <PageWrapper>
      <Badge color="orange" radius="sm" variant="filled" my="xl">
        RANK #
        {coinData.rank}
      </Badge>
      <CoinPrice coin={coinData} mb="xl" />
      <CoinStats coin={coinData} />
      <Center my="xl">
        <BackToHomeButton />
      </Center>
    </PageWrapper>
  );
}

export default CoinDetails;
