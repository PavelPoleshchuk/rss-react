import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Input was rendered', () => {
    render(<Input placeholder={'xxx'} />);
    expect(screen.getByTestId('input')).toBeDefined();
    expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'xxx');
  });
});

describe('Button', () => {
  it('Buttton was rendered', () => {
    render(<Input placeholder={'xxx'} />);
    expect(screen.getByTestId('input-button')).toBeDefined();
    expect(screen.getByTestId('input-button')).toHaveTextContent('Search');
  });
});
