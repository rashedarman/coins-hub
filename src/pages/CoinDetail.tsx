import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../api';
import { Coin } from '../interfaces';
import { RootState } from '../store/configureStore';

function CoinDetails() {
  const { coinId } = useParams();
  const { coins } = useSelector((state: RootState) => state.coins);

  const [coinData, setCoinData] = useState<Coin | null>(null);

  useEffect(() => {
    if (!coinId) return;
    const fetchCoin = async () => {
      let selectedCoin: Coin;
      if (coins.length > 0) {
        [selectedCoin] = coins.filter((coin) => coin.id === coinId);
      } else {
        selectedCoin = await getCoin({ coinId });
      }
      setCoinData(selectedCoin);
    };
    fetchCoin();
  }, [coinId, coins]);

  if (!coinId) return <h1>Not found</h1>;

  return <h1>CoinsPage</h1>;
}

export default CoinDetails;
