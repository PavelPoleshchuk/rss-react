import React from 'react';
import { render, screen } from '@testing-library/react';
import { dataApi } from '../data/dataApi';
import Products from './Products';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Products', () => {
  beforeAll(() => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(dataApi),
        }) as Promise<Response>
    );
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render 20 cards with correct data', () => {
    render(
      <Provider store={store}>
        <Products cards={dataApi} />
      </Provider>
    );
    dataApi.results.forEach((elem) => {
      expect(screen.getByTestId(`img-${elem.id}`)).toHaveAttribute('src', elem.image);
      expect(screen.getByTestId(`img-${elem.id}`)).toHaveAttribute('alt', elem.name);
      expect(screen.getByTestId(`title-${elem.id}`)).toHaveTextContent(elem.name);
      expect(screen.getByTestId(`title-${elem.id}`)).toHaveProperty('style');
      expect(screen.getByTestId(`product-${elem.id}`)).toHaveProperty('className');
    });
  });
});
