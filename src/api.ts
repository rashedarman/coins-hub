import axios from 'axios';
import {
  ChartData, Coin, Coins, News,
} from './interfaces';
import { NewsFilter, Period } from './types';

interface GetCoinsParams {
  limit?: number;
  currency?: string;
}

interface GetNewsParams {
  filter: NewsFilter;
  limit?: number;
}

interface GetCoinParams {
  coinId: string;
  currency?: string;
}

interface GetChartParams {
  coinId: string;
  period?: Period;
}

const api = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1/',
  headers: {
    Accept: 'application/json',
  },
});

export const getCoins = async (params: GetCoinsParams = {}) => {
  const { currency = 'USD', limit = 20 } = params;
  const response = await api.get<Coins>(
    `coins?currency=${currency}&limit=${limit}`,
  );
  return response.data;
};

export const getCoin = async (params: GetCoinParams) => {
  const { coinId, currency = 'USD' } = params;
  const response = await api.get<{ coin: Coin }>(
    `coins/${coinId}?currency=${currency}`,
  );
  return response.data;
};

export const getPriceChart = async (params: GetChartParams) => {
  const { coinId, period = '24h' } = params;
  const response = await api.get<ChartData>(
    `charts?period=${period}&coinId=${coinId}`,
  );
  return response.data;
};

export const getNews = async (params: GetNewsParams) => {
  const { filter, limit = 20 } = params;
  const response = await api.get<News>(`news/${filter}?limit=${limit}`);
  return response.data;
};

export default api;
