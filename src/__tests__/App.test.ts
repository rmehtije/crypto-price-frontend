// src/__tests__/simple.test.ts
import { render, screen } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';
import SimpleTest from './SimpleTest.svelte';

describe('Simple Test', () => {
  test('renders heading', () => {
    render(SimpleTest);
    const heading = screen.getByText('Crypto Price Tracker');
    expect(heading).toBeInTheDocument();
  });
});