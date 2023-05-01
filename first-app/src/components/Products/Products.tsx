import Product from 'components/Product/Product';
import React from 'react';
import { IRMApi } from '../types/types';
interface IProps {
  cards: IRMApi | undefined;
}
const Products = ({ cards }: IProps) => {
  return <>{cards && cards.results.map((prod) => <Product product={prod} key={prod.id} />)}</>;
};

export default Products;
