import Input from 'components/Input';
import Products from 'components/Products';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="top-block">
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
