import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

test('should render card component', () => {
  render(<Loading />);
  const loadingElement = screen.queryByTestId('loading-1');
  expect(loadingElement).toBeDefined();
});
