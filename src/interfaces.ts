export interface ChartData {
  chart: ChartDataPoint[];
}

export interface ChartDataPoint {
  timestamp: number;
  price: number;
}

export interface Coins {
  coins: Coin[];
}

export interface Coin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  websiteUrl: string;
}
