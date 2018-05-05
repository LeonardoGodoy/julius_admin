import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CustomersIndex extends Component {
  render(){
    const { loading, error, customers } = this.props.data;
    if(loading) return <div>Loading</div>;
    if(error) return <div>Connection error</div>;

    // console.log(customers);
    return (
      <div> ok </div>
    )
  }
}

const query = gql`
  query FetchCustomers {
    customers {
      id
      name
    }
  }
`

export default graphql(query)(CustomersIndex);
