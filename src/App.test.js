import { render, screen } from '@testing-library/react';
import App from './App';

test('renders status bar', () => {
  render(<App />);
  const statusBarElement = screen.getByText(/Status Bar/i);
  expect(statusBarElement).toBeInTheDocument();
});
