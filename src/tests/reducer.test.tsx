import { configureStore } from '@reduxjs/toolkit';
import coinsSlice, { fetchCoins } from '../store/coins/coinsSlice';
import { RootState } from '../store/configureStore';
import { coins as apiMockData } from './__mockData';

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
