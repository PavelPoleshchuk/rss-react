import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('About Us', () => {
  it('About Us was rendered', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('form-page-test')).toBeDefined();
  });
});
