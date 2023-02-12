import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptoCurrencies: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
});

export default cryptoSlice.reducer;
