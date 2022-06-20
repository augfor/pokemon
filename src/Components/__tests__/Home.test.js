import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('should render home component', () => {
  render(<Home />);
  const homeElement = screen.queryByTestId('home-1');
  expect(homeElement).toBeDefined();
});
