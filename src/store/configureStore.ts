import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './crypto/cryptoSlice';
import newsSlice from './news/newsSlice';

const rootReducer = {
  crypto: cryptoSlice,
  news: newsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
