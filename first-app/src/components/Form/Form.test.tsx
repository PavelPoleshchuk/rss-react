import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Form', () => {
  it('Form was rendered', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByTestId('form-form')).toBeDefined();

    expect(screen.getByTestId('form-checkbox')).toBeDefined();
    expect(screen.getByTestId('form-checkbox')).toHaveAttribute('type', 'checkbox');

    expect(screen.getByTestId('form-date')).toBeDefined();
    expect(screen.getByTestId('form-date')).toHaveAttribute('type', 'date');

    expect(screen.getByTestId('form-img')).toBeDefined();
    expect(screen.getByTestId('form-img')).toHaveAttribute(
      'accept',
      'image/jpeg,image/png,image/gif'
    );
    expect(screen.getByTestId('form-img')).toHaveAttribute('type', 'file');

    expect(screen.getByTestId('form-name')).toBeDefined();
    expect(screen.getByTestId('form-name')).toHaveAttribute('placeholder', 'Insert product name');
    expect(screen.getByTestId('form-name')).toHaveAttribute('type', 'text');

    expect(screen.getByTestId('form-price')).toBeDefined();
    expect(screen.getByTestId('form-price')).toHaveAttribute('placeholder', 'Insert product price');
    expect(screen.getByTestId('form-price')).toHaveAttribute('type', 'number');

    expect(screen.getByTestId('form-radio1')).toBeDefined();
    expect(screen.getByTestId('form-radio1')).toHaveAttribute('value', 'new');
    expect(screen.getByTestId('form-radio1')).toHaveAttribute('name', 'productStatus');
    expect(screen.getByTestId('form-radio1')).toHaveAttribute('type', 'radio');

    expect(screen.getByTestId('form-radio2')).toBeDefined();
    expect(screen.getByTestId('form-radio2')).toHaveAttribute('value', 'used');
    expect(screen.getByTestId('form-radio2')).toHaveAttribute('name', 'productStatus');
    expect(screen.getByTestId('form-radio2')).toHaveAttribute('type', 'radio');

    expect(screen.getByTestId('form-select')).toBeDefined();
  });
});

describe('Form button', () => {
  it('Button was rendered', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByTestId('form-button')).toBeDefined();
    expect(screen.getByTestId('form-button')).toHaveTextContent('Submit');
    expect(screen.getByTestId('form-button')).toHaveAttribute('type', 'submit');
  });
});
