import Input from 'components/Input/Input';
import Products from 'components/Products/Products';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div data-testid="home-page" className="top-block">
        <Input placeholder={'Your request'} />
        <span>page: Home</span>
      </div>
      <>
        <Products />
      </>
    </>
  );
};

export default HomePage;
