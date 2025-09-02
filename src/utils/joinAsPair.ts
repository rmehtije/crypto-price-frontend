import { type CryptoPair } from "../types/Crypto";

export default (pairs: CryptoPair[]) =>
  pairs.map(
    ({ baseCoin, quoteCoin }: CryptoPair) =>
      `${baseCoin.symbol}/${quoteCoin.symbol}`
  );
