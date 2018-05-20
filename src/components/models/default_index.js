import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Table, Container } from 'semantic-ui-react'

class CustomersIndex extends Component {

  renderItemsRow(){
    const { items } = this.props;

    return _.map(items, (item) => {
      return (
        <Table.Row key={item.id} >
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>

          <Table.Cell>
            actions
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  renderItemsTable(){
    return (
      <Container>
        <Table size='small' sortable selectable color='black'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Configurações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderItemsRows()}</Table.Body>
        </Table>
      </Container>
    )
  }

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
