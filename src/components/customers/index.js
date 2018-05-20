import React, { Component } from 'react'

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import fetchCustomers from '../../queries/fetch_customers';

import { Header, Container, Table, Icon, Checkbox, Search, Grid, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class CustomersIndex extends Component {

  constructor(props){
    super(props)
    this.state = { search_name: '', customers: null }
  }

  componentWillMount() {
    this._executeSearch()
  }

  renderCustomersRows(){
    const { customers } = this.state;

    return _.map(customers, (customer) => {
      return (
        <Table.Row key={customer.id} >
          <Table.Cell textAlign='center'><Checkbox/></Table.Cell>
            <Table.Cell>{this.renderCustomerStatus(customer.active)}</Table.Cell>
            <Table.Cell>{customer.name}</Table.Cell>
            <Table.Cell>{customer.document}</Table.Cell>
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
      <Header icon as='h3' textAlign='center'>
        <Icon name='users' color='orange'/>
        <Header.Content
          content='Clientes'
        />
      </Header>
    )
  }

  resetComponent = () => this.setState({ search_name: '' })

  handleSearchChange = (e, { search_name }) => {
    const { value } = e.target
    this.setState({ search_name: value })
    this._executeSearch()
  }

  renderSearchBar(){
    const { loading } = this.state;
    const { search_name } = this.state;

    return (
      <Input
        icon='search'
        placeholder='Search...'
        onChange={this.handleSearchChange}
        value={search_name}
      />
    )
  }


  render(){
    console.log(this.state)
    const { loading, customers } = this.state;

    if(loading || !customers) return <div>Loading</div>;

    //if(error) return <div>Connection error</div>;

    return (
      <div>
        {this.renderHeader()}
        {this.renderSearchBar()}
        {this.renderCustomersTable()}
      </div>
    )
  }

  _executeSearch = async () => {
    console.log('exec');
    const { search_name } = this.state

    const result = await this.props.client.query({
      query: fetchCustomers,
      variables: {
        name: search_name,
        order: 'name',
        page: 1,
        per_page: 10
      },
    })

    const { loading, customers } = result.data
    this.setState({ customers, loading })
  }
}

export default withApollo(CustomersIndex);
