import React from 'react';
import { render, screen } from '@testing-library/react';
import {App } from "./App";

test('Renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple React Counter/i);
  expect(linkElement).toBeInTheDocument();
});
