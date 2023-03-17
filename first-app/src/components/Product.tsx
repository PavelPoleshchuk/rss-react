import React from 'react';
import styles from './Product.module.css';
import { IProductProps } from './types/types';

const Product = ({ product }: IProductProps) => {
  return (
    <div className={styles.product}>
      <img src={product.image} className={styles.img} alt={product.title} />
      <p>{product.title}</p>
      <p style={{ fontWeight: 'bold' }}>
        Price:
        <span style={{ fontWeight: 'bold' }}>{product.price}</span>
      </p>
      <p style={{ fontWeight: 'bold' }}>
        Rate:
        <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span>
      </p>
    </div>
  );
};

export default Product;
