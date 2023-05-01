import { IResultsCard } from 'components/types/types';
import React from 'react';
import styles from './Product.module.css';
export interface IProductProps {
  product: IResultsCard;
  getClickFromCard: (id: string) => void;
}

const Product = ({ product, getClickFromCard }: IProductProps) => {
  return (
    <div
      id={`${product.id}`}
      onClick={(e) => getClickFromCard((e.target as HTMLInputElement).id)}
      className={styles.product}
      data-testid={`product-${product.id}`}
    >
      <img
        data-testid={`img-${product.id}`}
        src={product.image}
        className={styles.img}
        alt={product.name}
      />
      <p style={{ pointerEvents: 'none' }} data-testid={`title-${product.id}`}>
        {product.name}
      </p>
    </div>
  );
};

export default Product;
