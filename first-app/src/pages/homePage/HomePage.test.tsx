import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Home page', () => {
  it('Home page was rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
