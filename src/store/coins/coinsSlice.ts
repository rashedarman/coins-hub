import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
});

export default coinsSlice.reducer;
