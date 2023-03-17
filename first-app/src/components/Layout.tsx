import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'link-active' : '');
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home Page
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About Us
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
