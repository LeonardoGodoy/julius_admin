import React, { Component } from 'react'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Header, Container, Table, Icon, Segment, Button, Sidebar, Menu } from 'semantic-ui-react'

class CustomersIndex extends Component {

  constructor(props){
    super(props);
    this.state = { visible: false }
    console.log('constructor');
    console.log(this.props);
    console.log(this.state);
  }

  componentDidMount(props){
    console.log('did');
    console.log(this.props);
    console.log(this.state);
  }

  componentWillMount(props){
    console.log('will');
    console.log(this.props);
    console.log(this.state);
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderCustomersRows(){
    const { customers } = this.props.data;

    return _.map(customers, (customer) => {
      return (
        <Table.Row key={customer.id} >
          <Table.Cell>{customer.id}</Table.Cell>
          <Table.Cell>{customer.name}</Table.Cell>

          <Table.Cell>
            actions
          </Table.Cell>
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
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Configurações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderCustomersRows()}</Table.Body>
        </Table>
      </Container>
    )
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

  render(){
    const { loading, error } = this.props.data;
    if(loading) return <div>Loading</div>;
    if(error) return <div>Connection error</div>;

    // console.log(customers);
    const { visible } = this.state
    return (
      <div>
      <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>

        {this.renderHeader()}
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              <Icon color='orange' name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon color='orange' name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon color='orange' name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.renderCustomersTable()}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
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
