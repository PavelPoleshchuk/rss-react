import { IResultsCard } from 'components/types/types';
import React from 'react';
import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { addCardQuery, modalOpen } from 'store/homePageSlice/homePageSlice';
export interface IProductProps {
  product: IResultsCard;
}

const Product = ({ product }: IProductProps) => {
  const dispatch = useDispatch();

  return (
    <div
      id={`${product.id}`}
      onClick={(e) => {
        dispatch(addCardQuery((e.target as HTMLInputElement).id));
        dispatch(modalOpen());
      }}
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
