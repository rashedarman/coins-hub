import { configureStore } from '@reduxjs/toolkit';
import { Coin } from '../interfaces';
import coinsSlice, { fetchCoins } from '../store/coins/coinsSlice';
import { RootState } from '../store/configureStore';

const apiMockData: Coin[] = [
  {
    id: 'bitcoin',
    icon: 'https://www.example.com/bitcoin.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 48298.31,
    volume: 45119855843,
    marketCap: 906236851357,
    availableSupply: 18765868,
    totalSupply: 21000000,
    priceChange1d: 1.52,
    websiteUrl: 'https://bitcoin.org/',
  },
  {
    id: 'ethereum',
    icon: 'https://www.example.com/ethereum.png',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    price: 1759.18,
    volume: 25509058436,
    marketCap: 202141688507,
    availableSupply: 115113451,
    totalSupply: 115113451,
    priceChange1d: 0.43,
    websiteUrl: 'https://ethereum.org/',
  },
];

describe('Test coin slice', () => {
  it('should fulfill fetchCoins thunk', () => {
    const store = configureStore({
      reducer: {
        coins: coinsSlice,
      },
    });
    store.dispatch(fetchCoins.fulfilled(apiMockData, '_'));
    const { coins, loading, error }: RootState['coins'] = store.getState().coins;
    expect(coins).toEqual(apiMockData);
    expect(loading).toEqual(false);
    expect(error).toBeNull();
  });

  it('should be pending fetchCoins thunk', () => {
    const store = configureStore({
      reducer: {
        coins: coinsSlice,
      },
    });
    store.dispatch(fetchCoins.pending(''));
    const { loading }: RootState['coins'] = store.getState().coins;
    expect(loading).toEqual(true);
  });

  it('should reject fetchCoins thunk', () => {
    const store = configureStore({
      reducer: {
        coins: coinsSlice,
      },
    });
    const mockError = new Error('Something went wrong');
    store.dispatch(fetchCoins.rejected(mockError, '_'));
    const { error }: RootState['coins'] = store.getState().coins;
    expect(error).not.toBeNull();
  });
});
