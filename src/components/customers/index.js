import React, { Component } from 'react'

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import fetchCustomers from '../../queries/fetch_customers';

import { Header, Container, Table, Icon, Checkbox, Grid, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { MyContext } from '../../contexts/my_context'
import Search from './search'

class CustomersIndex extends Component {
  componentWillMount() {
    this.props.fetchData({ name: '' })
  }

  onTableRowClick() {
    console.log('Click');
  }

  renderCustomersRows(){
    const { data } = this.props

    return _.map(data, (customer) => {
      return (
        <Table.Row key={customer.id}>
          <Table.Cell textAlign='center'><Checkbox/></Table.Cell>
          <Table.Cell onClick={this.onTableRowClick.bind(this)}>{this.renderCustomerStatus(customer.active)}</Table.Cell>
          <Table.Cell onClick={this.onTableRowClick.bind(this)}>{customer.name}</Table.Cell>
          <Table.Cell onClick={this.onTableRowClick.bind(this)}>{customer.document}</Table.Cell>
          <Table.Cell onClick={this.onTableRowClick.bind(this)}>{customer.social_name}</Table.Cell>

        </Table.Row>
      )
    })
  }

  renderCustomersTable(){
    return (
      <Container>
        <Table size='small' sortable selectable color='black'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'><Checkbox/></Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Documento</Table.HeaderCell>
              <Table.HeaderCell>Razão social</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderCustomersRows()}</Table.Body>
        </Table>
      </Container>
    )
  }

  renderCustomerStatus(active){
    if (active) return <b>ativo</b>;
    return <b>desativado</b>;
  }

  renderHeader(){
    return (
      <div style={{paddingTop: '10px'}}>
        <Header icon as='h4' textAlign='center'>
          <Icon name='users' color='orange'/>
          <Header.Content
            content='Clientes'
          />
        </Header>
      </div>
    )
  }

  render(){
    const { data } = this.props;

    return (
      <div>
        {this.renderHeader()}
        <Search/>
        {this.renderCustomersTable()}
      </div>
    )
  }
}

export default (props) => (
  <MyContext.Consumer>
    {(context) => ( <CustomersIndex {...context} {...props}/> )}
  </MyContext.Consumer>
)
