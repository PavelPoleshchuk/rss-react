import Product from 'components/Product/Product';
import React, { ReactPropTypes } from 'react';
import { dataApi } from '../data/dataApi';
import { IProduct } from '../types/types';

class Products extends React.Component {
  state: { dataArr: IProduct[] };
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = { dataArr: [] };
  }

  componentDidMount() {
    this.setState({ dataArr: dataApi });
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
