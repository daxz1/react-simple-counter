import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {App } from "./App";

afterEach(cleanup);

test('Renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple React Counter/i);
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot', () => {
  // https://testing-library.com/docs/react-testing-library/api/#asfragment
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot()
})

test('Init Counter to 0', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

test('Increment Counter', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('increment'));
  expect(getByTestId('counter')).toHaveTextContent('1');
})

test('Decrement Counter', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('decrement'));
  expect(getByTestId('counter')).toHaveTextContent('-1');
})