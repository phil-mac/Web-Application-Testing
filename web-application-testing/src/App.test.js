import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('Test that ball count and strike count are rendered on Display', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/strikeCountLabel/i);
  getByTestId(/strikeCountNum/i);
  getByTestId(/ballCountLabel/i);
  getByTestId(/ballCountNum/i);

})

test('Test that all buttons are showing on Dashboard', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/ballButton/i);
  getByTestId(/strikeButton/i);
  getByTestId(/foulButton/i);
  getByTestId(/hitButton/i);
})
