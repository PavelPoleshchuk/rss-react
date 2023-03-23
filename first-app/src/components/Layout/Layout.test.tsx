import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import HomePage from 'pages/homePage/HomePage';
import AboutUs from 'pages/aboutUs/AboutUs';

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
    const formsPage = screen.getByTestId('forms-page');
    expect(homePageLink).toHaveClass('link-active');
    expect(aboutUsLink).not.toHaveClass('link-active');
    expect(formsPage).not.toHaveClass('link-active');
    fireEvent.click(aboutUsLink);
    expect(homePageLink).not.toHaveClass('link-active');
    expect(aboutUsLink).toHaveClass('link-active');
    expect(formsPage).not.toHaveClass('link-active');
    fireEvent.click(formsPage);
    expect(homePageLink).not.toHaveClass('link-active');
    expect(aboutUsLink).not.toHaveClass('link-active');
    expect(formsPage).toHaveClass('link-active');
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
