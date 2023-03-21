import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import HomePage from 'pages/HomePage';
import AboutUs from 'pages/AboutUs';

describe('Header', () => {
  it('header was rendered', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeDefined();
  });

  it('navlink must be active onclick', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homePageLink = screen.getByTestId('home-page-link');
    const aboutUsLink = screen.getByTestId('about-us');
    expect(homePageLink).toHaveClass('link-active');
    expect(aboutUsLink).not.toHaveClass('link-active');
    fireEvent.click(aboutUsLink);
    expect(homePageLink).not.toHaveClass('link-active');
    expect(aboutUsLink).toHaveClass('link-active');
  });
});
describe('Main', () => {
  it('main was rendered', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId('main')).toBeDefined();
  });
});
describe('404', () => {
  it('404 was rendered', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('not-found')).toBeDefined();
  });
});
describe('Home page', () => {
  it('Home page was rendered', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
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
