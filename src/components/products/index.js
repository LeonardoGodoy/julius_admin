import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ProductsIndex extends Component {
  render(){
    const { loading, error, products } = this.props.data;
    if(loading) return <div>Loading</div>;
    if(error) return <div>Connection error</div>;

    // console.log(products);
    return (
      <div> ok </div>
    )
  }
}

const query = gql`
  query FetchProducts {
    products {
      id
      name
      kind
      value
    }
  }
`

export default graphql(query)(ProductsIndex);
