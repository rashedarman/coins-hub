import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoins } from '../../api';
import { Coin } from '../../interfaces';

const FETCH = 'coins/FETCH';

const initialState = {
  coins: [] as Coin[],
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
    builder.addCase(fetchCoins.fulfilled, (state, action) => ({
      ...state,
      coins: action.payload,
    }));
  },
});

export default coinsSlice.reducer;
