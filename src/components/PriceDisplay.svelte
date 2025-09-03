<script lang="ts">
  import formatNumber from "../utils/formatNumber";
  import { type CryptoPrice } from "../types/Crypto";

  export let priceData: CryptoPrice | null = null;
</script>

{#if priceData}
  <div
    class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden"
  >
    <div class="p-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
    <div class="p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl md:text-3xl font-bold">{priceData.pair.base}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <p class="text-gray-400">Current Price</p>
          <p class="text-4xl md:text-5xl font-bold text-white">
            {formatNumber(priceData.data.price, 4)}
            <small>{priceData.pair.quote}</small>
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-gray-400">Last Updated</p>
          <p class="text-xl font-semibold text-white">
            {new Date(priceData.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-700">
        <div class="flex space-x-4">
          <div class="flex-1 p-4 bg-gray-700/50 rounded-lg">
            <p class="text-gray-400 text-sm">24h Change</p>
            <p class="text-green-400 font-semibold">
              {formatNumber(priceData.data.percent_change_24h)}%
            </p>
          </div>
          <div class="flex-1 p-4 bg-gray-700/50 rounded-lg">
            <p class="text-gray-400 text-sm">24h Volume</p>
            <p class="text-white font-semibold">
              {formatNumber(priceData.data.volume_24h)}
            </p>
          </div>
          <div class="flex-1 p-4 bg-gray-700/50 rounded-lg">
            <p class="text-gray-400 text-sm">Market Cap</p>
            <p class="text-white font-semibold">
              {formatNumber(priceData.data.market_cap)}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div
    data-testid="loading-skeleton"
    class="bg-gray-800 rounded-2xl p-8 animate-pulse"
  >
    <div class="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
    <div class="h-12 bg-gray-700 rounded w-1/2 mb-4"></div>
    <div class="h-6 bg-gray-700 rounded w-2/3"></div>
  </div>
{/if}
