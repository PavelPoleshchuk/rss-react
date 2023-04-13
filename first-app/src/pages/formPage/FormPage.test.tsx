import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('About Us', () => {
  it('About Us was rendered', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormPage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('form-page-test')).toBeDefined();
  });
});
