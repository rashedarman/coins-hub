import {
  Center, Flex, Loader, Text, Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CoinSearch from '../components/CoinSearch';
import CoinsListTable from '../components/CoinsListTable';
import PageWrapper from '../components/PageWrapper';
import { fetchCoins } from '../store/coins/coinsSlice';
import { RootState, useAppDispatch } from '../store/configureStore';

function CoinsPage() {
  const dispatch = useAppDispatch();

  const { loading, coins } = useSelector((state: RootState) => state.coins);
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    if (!coins.length) {
      dispatch(fetchCoins());
    }
  }, [dispatch]);

  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);

  return (
    <PageWrapper>
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="sm"
        sx={{ margin: '2.5rem auto' }}
      >
        <Title fw="600">Best Coin Price Tracker in the Market</Title>
        <Text>
          With CoinStats, you can manage all your crypto assets from one
          interface.
        </Text>
      </Flex>

      <CoinSearch onSetFilteredCoins={setFilteredCoins} />

      {loading && (
        <Center sx={{ marginTop: '2.5rem' }}>
          <Loader size="md" />
        </Center>
      )}

      {!loading && <CoinsListTable coins={filteredCoins} />}
    </PageWrapper>
  );
}

export default CoinsPage;
