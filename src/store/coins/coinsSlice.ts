import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoins } from '../../api';
import { Coin } from '../../interfaces';

const FETCH = 'coins/FETCH';

const initialState = {
  coins: [] as Coin[],
  loading: false,
  error: null as string | null,
};

export const fetchCoins = createAsyncThunk(FETCH, async () => {
  const { coins } = await getCoins({ limit: 50 });
  return coins;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCoins.fulfilled, (state, action) => ({
        ...state,
        coins: action.payload,
        loading: false,
      }))
      .addCase(fetchCoins.rejected, (state) => ({
        ...state,
        error: 'Something went wrong',
        loading: false,
      }));
  },
});

export default coinsSlice.reducer;
