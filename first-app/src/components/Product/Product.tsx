import React from 'react';
import styles from './Product.module.css';
import { IProductProps } from '../types/types';

const Product = ({ product }: IProductProps) => {
  return (
    <div className={styles.product}>
      <img
        data-testid={`img-${product.id}`}
        src={product.image}
        className={styles.img}
        alt={product.title}
      />
      <p data-testid={`title-${product.id}`}>{product.title}</p>
      <p style={{ fontWeight: 'bold' }}>
        Price:
        <span data-testid={`price-${product.id}`} style={{ fontWeight: 'bold' }}>
          {product.price}
        </span>
      </p>
      <p style={{ fontWeight: 'bold' }}>
        Rate:
        <span data-testid={`rate-${product.id}`} style={{ fontWeight: 'bold' }}>
          {product.rating.rate}
        </span>
      </p>
    </div>
  );
};

export default Product;
