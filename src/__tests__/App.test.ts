import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import PriceDisplay from '../components/PriceDisplay.svelte';
import type { CryptoPrice } from '../types/Crypto'

describe('PriceDisplay', () => {
  const timestamp = Date.now();
  const mockPriceData: CryptoPrice = {
    success: true,
    pair: {
      base: 'BTC',
      quote: 'USD',
      pairId: 1,
    },
    data: {
      price: 45000,
      percent_change_24h: 2.5,
      volume_24h: 25000000000,
      market_cap: 850000000000
    },
    timestamp
  }

  it('should display loading state when priceData is null', () => {
    render(PriceDisplay, { priceData: null })

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument()
  })

  it('should display cryptocurrency pair name', () => {
    render(PriceDisplay, { priceData: mockPriceData })
    
    expect(screen.getByText('BTC')).toBeInTheDocument()
  })

  it('should display formatted current price with currency', () => {
    render(PriceDisplay, { priceData: mockPriceData })
    
    const priceElement = screen.getByText('45K')
    expect(priceElement).toBeInTheDocument()
    expect(priceElement).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold', 'text-white')
    
    expect(screen.getByText('USD')).toBeInTheDocument()
  })
})