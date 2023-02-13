import { Flex, Image, Table } from '@mantine/core';
import { useSelector } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import { fetchCoins } from '../store/coins/coinsSlice';
import { RootState, useAppDispatch } from '../store/configureStore';
import { abbreviateNum } from '../utils';

function CoinsPage() {
  const dispatch = useAppDispatch();

  const { coins } = useSelector((state: RootState) => state.coins);
  if (!coins.length) {
    dispatch(fetchCoins());
  }

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
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <Flex align="center">
                  <Image src={coin.icon} alt={coin.name} mr="sm" width="2rem" />
                  {coin.name}
                  {' '}
                  (
                  {coin.symbol}
                  )
                </Flex>
              </td>
              <td>{coin.priceChange1d}</td>
              <td>
                {coin.price < 1
                  ? coin.price.toFixed(6)
                  : coin.price.toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                  })}
              </td>
              <td>{abbreviateNum(coin.marketCap)}</td>
              <td>{abbreviateNum(coin.volume)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWrapper>
  );
}

export default CoinsPage;
