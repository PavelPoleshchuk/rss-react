import React from 'react';
import { render, screen } from '@testing-library/react';
import { dataApi } from '../data/dataApi';
import Products from './Products';

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

  it('should render all cards with correct data', () => {
    render(<Products />);
    dataApi.forEach((elem) => {
      expect(screen.getByTestId(`img-${elem.id}`)).toHaveAttribute('src', elem.image);
      expect(screen.getByTestId(`img-${elem.id}`)).toHaveAttribute('alt', elem.title);
      expect(screen.getByTestId(`title-${elem.id}`)).toHaveTextContent(elem.title);
      expect(screen.getByTestId(`price-${elem.id}`)).toHaveTextContent(String(elem.price));
      expect(screen.getByTestId(`rate-${elem.id}`)).toHaveTextContent(String(elem.rating.rate));
    });
  });
});
