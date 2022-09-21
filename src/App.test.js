import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders the necessary elements', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { text: 'Generator'});
  expect(linkElement).toBeInTheDocument();

  const generateButton = screen.getByRole('button', { text: 'Generate'});
  expect(generateButton).toBeInTheDocument();

  const resultElement = screen.getByRole('result');
  expect(resultElement).toBeInTheDocument();
});

it('generates a word and sets the result', () => {
  render(<App />);
  const generateButton = screen.getByRole('button', { text: 'Generate'});
  expect(generateButton).toBeInTheDocument();

  const resultElement = screen.getByRole('result');
  expect(resultElement).toBeInTheDocument();

  fireEvent.click(generateButton);

  expect(resultElement.innerHTML.length).toBe(8);
});