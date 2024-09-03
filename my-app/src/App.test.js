import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Number Guessing Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Number Guessing Game/i);
  expect(titleElement).toBeInTheDocument();
});

// Add more tests as needed
