interface Coin {
  id: string;
  name: string;
  symbol: string;
}

export interface CryptoPrice {
  success: boolean;
  data: {
    price: number;
    volume_24h: number;
    percent_change_24h: number;
    market_cap: number;
  };
  timestamp: number;
  pair: {
    base: string;
    quote: string;
    pairId: number;
  };
  dataProvider?: {
    name: string;
    id: number;
  };
  error?: string;
}

export interface CryptoPair {
  baseCoin: Coin;
  quoteCoin: Coin;
  isActive: boolean;
}
