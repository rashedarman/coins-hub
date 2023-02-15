import { Table, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Coin } from '../interfaces';
import { formatCoinPrice, priceToKMB } from '../utils';
import CoinIconNameSymbol from './CoinNameIcon';
import PriceChangeBadge from './PriceChangeBadge';

interface Props {
  coins: Coin[];
}

const CoinsListTable = (props: Props) => {
  const { coins } = props;

  const navigate = useNavigate();

  return (
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
          <tr
            key={coin.id}
            onClick={() => navigate(`/coins/${coin.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <td>{coin.rank}</td>
            <td>
              <CoinIconNameSymbol
                icon={coin.icon}
                name={coin.name}
                symbol={coin.symbol}
              />
            </td>
            <td>
              <PriceChangeBadge priceChange={coin.priceChange1d} />
            </td>
            <td>
              <Text fw="500">{formatCoinPrice(coin.price)}</Text>
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
        ))}
      </tbody>
    </Table>
  );
};

export default CoinsListTable;
