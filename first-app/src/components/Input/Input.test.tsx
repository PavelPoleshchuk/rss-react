import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Input', () => {
  it('Input was rendered', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
    expect(screen.getByTestId('input')).toBeDefined();
    expect(screen.getByTestId('input')).toHaveAttribute(
      'placeholder',
      'Enter character(for example, Rick)'
    );
  });
});

describe('Button', () => {
  it('Button was rendered', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
    expect(screen.getByTestId('input-button')).toBeDefined();
    expect(screen.getByTestId('input-button')).toHaveTextContent('Search');
  });
});
