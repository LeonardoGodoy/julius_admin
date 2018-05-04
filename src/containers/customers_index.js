import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CustomersIndex extends Component{

  render(){
    const { customers, loading } = this.props.data;
    if(loading) return <div>Loading...</div>;

    console.log(customers);

    return <div>Nothing yet</div>
  }
}

const query = gql`
  query TodoAppQuery {
    customers {
      id
      name
    }
  }
`

export default graphql(query)(CustomersIndex);
