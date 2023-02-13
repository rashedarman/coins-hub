import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import coinsSlice from './coins/coinsSlice';
import newsSlice from './news/newsSlice';

const rootReducer = {
  coins: coinsSlice,
  news: newsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
