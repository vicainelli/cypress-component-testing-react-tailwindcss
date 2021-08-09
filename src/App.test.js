import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders the App correctly', () => {
  render(<App />);
  const el = screen.getByText(/Cypress Component Testing with Tailwind CSS/i);
  expect(el).toBeInTheDocument();
});
