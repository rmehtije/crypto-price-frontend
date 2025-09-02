<script lang="ts">
  export let pairs: string[];
  export let selectedPair: string;
  export let loading: boolean;
  export let loadPrice: () => {};

  const arrowDownIcon = "/src/assets/icons/arrow-down.svg";
  const refreshIcon = "/src/assets/icons/refresh.svg";
  const loadingIcon = "/src/assets/icons/loading.svg";
</script>

<div class="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
  <div class="flex flex-col md:flex-row gap-4 items-center">
    <div class="relative flex-grow">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <img
          src={arrowDownIcon}
          class="h-5 w-5 text-gray-400"
          alt="Arrow down"
        />
      </div>
      <select
        bind:value={selectedPair}
        class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
      >
        {#each pairs as pair}
          <option value={pair}>{pair}</option>
        {/each}
      </select>
    </div>

    <button
      on:click={loadPrice}
      disabled={loading}
      class="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
    >
      {#if loading}
        <img
          src={loadingIcon}
          class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
          alt="loading"
        />
        Loading...
      {:else}
        <img src={refreshIcon} class="h-5 w-5 mr-2" alt="refresh" />
        Refresh Price
      {/if}
    </button>
  </div>
</div>
