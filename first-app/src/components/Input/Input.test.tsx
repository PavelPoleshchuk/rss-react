import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import Input from './Input';

describe('Input', () => {
  it('Input was rendered', () => {
    render(<Input placeholder={'xxx'} />);
    expect(screen.getByTestId('input')).toBeDefined();
  });
});

describe('Button', () => {
  it('Buttton was rendered', () => {
    render(<Input placeholder={'xxx'} />);
    expect(screen.getByTestId('input-button')).toBeDefined();
    expect(screen.getByTestId('input-button')).toHaveTextContent('Search');
  });
});
