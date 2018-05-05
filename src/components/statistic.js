import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Statistic } from 'semantic-ui-react'


class StatisticExampleGroup extends Component {
  render(){
    const { loading, error, statistics } = this.props.data;
    if(loading) return <div>Loading</div>;
    if(error) return <div>Connection error</div>;

    return (
      <div>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>{statistics.sales_value}</Statistic.Value>
            <Statistic.Label>Contabilizado esse mês</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{statistics.products}</Statistic.Value>
            <Statistic.Label>Produtos</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{statistics.customers}</Statistic.Value>
            <Statistic.Label>Clientes</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    )
  }
}
const query = gql`
  query TodoAppQuery {
    statistics {
      products
      customers
      sales_value
    }
  }
`

export default graphql(query)(StatisticExampleGroup);
