import { render, screen } from '@testing-library/react';
import Pokemon from '../Pokemon';

test('should render pokemon component', () => {
  render(<Pokemon />);
  const pokemonElement = screen.queryByTestId('pokemon-1');
  expect(pokemonElement).toBeDefined();
});
