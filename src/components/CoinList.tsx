import { SimpleGrid } from '@mantine/core';
import { Coins } from '../interfaces';
import CoinItem from './CoinItem';
import PageWrapper from './PageWrapper';

function CoinsList(props: Coins) {
  const { coins } = props;

  return (
    <PageWrapper>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 3 },
          { maxWidth: 'sm', cols: 2 },
          { maxWidth: 'xs', cols: 1 },
        ]}
        my="xl"
      >
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </SimpleGrid>
    </PageWrapper>
  );
}

export default CoinsList;
