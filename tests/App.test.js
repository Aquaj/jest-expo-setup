import { render, screen } from '@testing-library/react-native';
import App from '../App';

test('render App', () => {
  render(<App />);
  const button = screen.getByText('Hello');
  expect(button).toBeOnTheScreen();
})
