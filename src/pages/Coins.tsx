import { Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import { fetchCoins } from '../store/coins/coinsSlice';
import { RootState, useAppDispatch } from '../store/configureStore';

function CoinsPage() {
  const dispatch = useAppDispatch();

  const { coins } = useSelector((state: RootState) => state.coins);
  if (!coins.length) {
    dispatch(fetchCoins());
  }

  return (
    <PageWrapper>
      {coins.map((coin) => (
        <Text key={coin.id}>{coin.name}</Text>
      ))}
    </PageWrapper>
  );
}

export default CoinsPage;
