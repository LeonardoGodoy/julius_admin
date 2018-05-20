import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ContractsIndex extends Component {
  render(){
    const { loading, error, contracts } = this.props.data;
    if(loading) return <div>Loading</div>;
    if(error) return <div>Connection error</div>;

    console.log(contracts);
    return (
      <div> ok </div>
    )
  }
}

const query = gql`
  query FetchContracts {
    contracts {
      id
      value
      batata: customer {
        name
      }
      product {
        name
      }
    }
  }
`

export default graphql(query)(ContractsIndex);
