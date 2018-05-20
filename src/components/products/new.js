import React, { Component } from 'react'

import { Header } from 'semantic-ui-react';

import Form from '../forms/product_form'

class ProductsNew extends Component {
  state = {
    product: {
      name: '',
      kind: '',
      value: 0,
    },
    loading: false,
    errors: {}
  }

  render(){
    const { product } = this.state;
    console.log(product);

    return(
      <div>
        <Form product={product}/>
      </div>
    )
  }
}

export default ProductsNew;
