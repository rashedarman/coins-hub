import {
  Badge, Flex, Image, Table, Text, Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CoinSearch from '../components/CoinSearch';
import PageWrapper from '../components/PageWrapper';
import { fetchCoins } from '../store/coins/coinsSlice';
import { RootState, useAppDispatch } from '../store/configureStore';
import { priceToKMB } from '../utils';

function CoinsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { coins } = useSelector((state: RootState) => state.coins);
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);

  if (!coins.length) {
    dispatch(fetchCoins());
  }

  const rows = filteredCoins.map((coin) => (
    <tr
      key={coin.id}
      onClick={() => navigate(`/coins/${coin.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <td>{coin.rank}</td>
      <td>
        <Flex align="center">
          <Image src={coin.icon} alt={coin.name} mr="sm" width="2rem" />
          <Text fw="bold">{coin.name}</Text>
          <Text color="dimmed" fw="500" sx={{ marginLeft: '.375rem' }}>
            {coin.symbol}
          </Text>
        </Flex>
      </td>
      <td>
        {coin.priceChange1d < 0 ? (
          <Badge color="red" size="lg" radius="sm">
            &#9660;
            {coin.priceChange1d}
            %
          </Badge>
        ) : (
          <Badge color="green" size="lg" radius="sm">
            &#9650;
            {coin.priceChange1d}
            %
          </Badge>
        )}
      </td>
      <td>
        <Text fw="500">
          $
          {coin.price < 1
            ? coin.price.toFixed(6)
            : coin.price.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
        </Text>
      </td>
      <td>
        <Text>
          $
          {priceToKMB(coin.marketCap)}
        </Text>
      </td>
      <td>
        <Text>
          $
          {priceToKMB(coin.volume)}
        </Text>
      </td>
    </tr>
  ));

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

      <Table
        highlightOnHover
        withBorder
        verticalSpacing="lg"
        horizontalSpacing="xl"
        my="xl"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Change (24h)</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Volume 24h</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </PageWrapper>
  );
}

export default CoinsPage;
