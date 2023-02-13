import {
  Badge, Flex, Image, Table, Text,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { fetchCoins } from '../store/coins/coinsSlice';
import { RootState, useAppDispatch } from '../store/configureStore';
import { abbreviateNum } from '../utils';

function CoinsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { coins } = useSelector((state: RootState) => state.coins);
  if (!coins.length) {
    dispatch(fetchCoins());
  }

  const rows = coins.map((coin) => (
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
          {abbreviateNum(coin.marketCap)}
        </Text>
      </td>
      <td>
        <Text>
          $
          {abbreviateNum(coin.volume)}
        </Text>
      </td>
    </tr>
  ));

  return (
    <PageWrapper>
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
