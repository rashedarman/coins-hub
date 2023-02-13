import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './coins/coinsSlice';
import newsSlice from './news/newsSlice';

const rootReducer = {
  coins: coinsSlice,
  news: newsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
