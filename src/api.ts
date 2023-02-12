import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1/',
  headers: {
    Accept: 'application/json',
  },
});

export type Period = '24h' | '1w' | '1m' | '3m' | '6m' | '1y' | 'all';
export type NewsFilter =
  | 'handpicked'
  | 'trending'
  | 'latest'
  | 'bullish'
  | 'bearish';

export const getCoins = async (currency: string, limit = 20) => {
  const response = await api.get(`coins?currency=${currency}&limit=${limit}`);
  return response.data;
};

export const getCoin = async (coinId: string, currency = 'USD') => {
  const response = await api.get(`coins/${coinId}?currency=${currency}`);
  return response.data;
};

export const getPriceChart = async (coinId: string, period: Period) => {
  const response = await api.get(`charts?period=${period}&coinId=${coinId}`);
  return response.data;
};

export const getNews = async (filter: NewsFilter, limit = 20) => {
  const response = await api.get(`news/${filter}?limit=${limit}`);
  return response.data;
};

export default api;
