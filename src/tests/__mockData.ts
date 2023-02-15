import { Coin } from '../interfaces';

// ? There will be more data later so let's disable this rule for now
/* eslint-disable import/prefer-default-export */

export const coins: Coin[] = [
  {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 22959,
    volume: 36394172890,
    marketCap: 442766521921,
    availableSupply: 19285012,
    totalSupply: 21000000,
    priceChange1d: -0.15,
    websiteUrl: 'http://www.bitcoin.org',
  },
  {
    id: 'ethereum',
    icon: 'https://static.coinstats.app/coins/1633034449328.png',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    price: 1727,
    volume: 18281245035,
    marketCap: 199607167731,
    availableSupply: 115733648,
    totalSupply: 0,
    priceChange1d: -0.24,
    websiteUrl: 'https://www.ethereum.org/',
  },
];
