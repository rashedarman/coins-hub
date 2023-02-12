import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
