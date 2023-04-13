import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Header', () => {
  it('header was rendered', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Forms Page/i)).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeDefined();
  });

  it('navlink must be active onclick', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const homePageLink = screen.getByTestId('home-page-link');
    const aboutUsLink = screen.getByTestId('about-us-link');
    const formsPage = screen.getByTestId('forms-page-link');
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
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('main-test')).toBeDefined();
  });
});
