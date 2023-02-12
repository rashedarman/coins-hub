import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders "Hello, World!"', () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/Hello, World!/i);
  expect(greeting).toBeInTheDocument();
});
