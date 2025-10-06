import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pricing section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /pricing/i });
  expect(heading).toBeInTheDocument();
});
