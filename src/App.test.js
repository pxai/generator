import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders the necessary elements', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: 'Generator'});
  expect(linkElement).toBeInTheDocument();

  const generateButton = screen.getByRole('button', { name: 'Generate'});
  expect(generateButton).toBeInTheDocument();

  const numbersCheckbox = screen.getByLabelText('Numbers')
  expect(numbersCheckbox).toBeInTheDocument();    
  
  const symbolsCheckbox = screen.getByLabelText('Symbols')
  expect(symbolsCheckbox).toBeInTheDocument();

  const customLength = screen.getByPlaceholderText('Custom length')
  expect(customLength).toBeInTheDocument();

  const resultElement = screen.getByTestId('result');
  expect(resultElement).toBeInTheDocument();
});

it('changes length configuration', () => {
  render(<App />);
  const generateButton = screen.getByRole('button', { name: 'Generate'});
  expect(generateButton).toBeInTheDocument();

  [4, 8, 12, 15, 20].forEach(value => {
    let button = screen.getByRole('button', {name: `${value}`});
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('settings')).toHaveTextContent(`Length: ${value}`)
  });
});

it('generates a word and sets the result', () => {
  render(<App />);
  const generateButton = screen.getByRole('button', { name: 'Generate'});
  expect(generateButton).toBeInTheDocument();

  const resultElement = screen.getByTestId('result');
  expect(resultElement).toBeInTheDocument();

  fireEvent.click(generateButton);

  expect(resultElement.innerHTML.length).toBe(8);
});

it('generates a word with configured length', () => {
  render(<App />);
  const generateButton = screen.getByRole('button', { name: 'Generate'});
  const resultElement = screen.getByTestId('result');

  [4, 8, 12, 15, 20].forEach(value => {
    let button = screen.getByRole('button', {name: `${value}`});
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(generateButton);

    expect(resultElement.innerHTML.length).toBe(value);
  });
});

it('generates a word with custom length', () => {
  render(<App />);
  const generateButton = screen.getByRole('button', { name: 'Generate'});
  const resultElement = screen.getByTestId('result');
  const customLength = screen.getByPlaceholderText('Custom length')

  fireEvent.input(customLength, {target: { value: 42 }})

  fireEvent.click(generateButton);
  expect(resultElement.innerHTML.length).toBe(42);
});