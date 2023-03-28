import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('About Us', () => {
  it('About Us was rendered', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByTestId('about-us')).toBeDefined();
  });
});
