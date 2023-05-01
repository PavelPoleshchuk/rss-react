import Product from 'components/Product/Product';
import React from 'react';
import { IRMApi } from '../types/types';
interface IProps {
  cards: IRMApi | null;
  getClickFromCard: (id: string) => void;
}
const Products = ({ cards, getClickFromCard }: IProps) => {
  return (
    <>
      {cards &&
        cards.results.map((prod) => (
          <Product product={prod} key={prod.id} getClickFromCard={getClickFromCard} />
        ))}
    </>
  );
};

export default Products;
