import Product from 'components/Product/Product';
import React, { useState } from 'react';
import { dataApi } from '../data/dataApi';

const Products = () => {
  const [product] = useState(dataApi);
  return (
    <>
      {product.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </>
  );
};

export default Products;
