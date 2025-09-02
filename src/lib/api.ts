import { type CryptoPrice, type CryptoPair } from "../types/Crypto";

export const fetchPrice = async (pair: string): Promise<CryptoPrice> => {
  const response = await fetch(`/api/price/${encodeURIComponent(pair)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch price");
  }
  return response.json();
};

export const fetchPairs = async (): Promise<CryptoPair[]> => {
  const response = await fetch(`/api/pairs`);
  if (!response.ok) {
    throw new Error("Failed to fetch pairs");
  }
  return response.json();
};
