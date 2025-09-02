<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchPrice, fetchPairs } from './lib/api';
  import { type CryptoPrice, type CryptoPair} from './types/Crypto';
  import joinAsPair from './utils/joinAsPair';
  import Controls from './components/Controls.svelte';
  import PriceDisplay from './components/PriceDisplay.svelte';

  let pairs: string[] = [];
  let selectedPair: string = '';
  let priceData: CryptoPrice | null = null;
  let loading: boolean = false;
  let error: string | null = null;

  const loadPrice = async () => {
    loading = true;
    error = null;
    try {
      priceData = await fetchPrice(selectedPair);
    } catch (err) {
      error = (err as Error).message;
    } finally {
      loading = false;
    }
  };

  const loadPairs = async () => {
    loading = true;
    error = null;
    try {
      const purePairs: CryptoPair[] = await fetchPairs();

      pairs = joinAsPair(purePairs);
      selectedPair = pairs[0];
    } catch (err) {
      error = (err as Error).message;
    } finally {
      loading = false;
    }
  };

  onMount(() => {
    loadPairs();
  });

  $: if (selectedPair) {
    loadPrice();
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 md:p-8">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
        Crypto Price Tracker
      </h1>
      <p class="text-gray-400">Real-time cryptocurrency prices at your fingertips</p>
    </div>

    <Controls pairs={pairs} bind:selectedPair loading={loading} loadPrice={loadPrice} />

    {#if error}
      <div class="mb-8 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 flex items-center">
        <span>Error: {error}</span>
      </div>
    {/if}

    <PriceDisplay priceData={priceData} />
  </div>
</main>