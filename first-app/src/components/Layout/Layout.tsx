import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'link-active' : '');
  return (
    <>
      <header data-testid="header">
        <NavLink data-testid="home-page" to="/" className={setActive}>
          Home Page
        </NavLink>
        <NavLink data-testid="about-us" to="/about" className={setActive}>
          About Us
        </NavLink>
      </header>
      <main data-testid="main" className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
