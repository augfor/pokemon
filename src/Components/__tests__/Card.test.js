import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('should render card component', () => {
  render(<Card />);
  const cardElement = screen.queryByTestId('card-1');
  expect(cardElement).toBeDefined();
});
