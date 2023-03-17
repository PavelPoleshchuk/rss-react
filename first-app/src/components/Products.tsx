import Product from 'components/Product';
import React, { ReactPropTypes } from 'react';
import { IProduct } from './types/types';

class Products extends React.Component {
  state: { dataArr: IProduct[] };
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = { dataArr: [] };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => this.setState({ dataArr: data }));
  }

  render() {
    return (
      <>
        {this.state.dataArr.map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </>
    );
  }
}

export default Products;
