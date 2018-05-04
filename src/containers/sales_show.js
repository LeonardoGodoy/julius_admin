import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSale } from '../actions';

import ItemsCard from '../components/items_card.js';

import { Table, Card, Feed, Header, Icon, Dropdown, Container, Dimmer, Loader, Segment, Statistic } from 'semantic-ui-react'

class SalesShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchSale(id);
  }

  renderItemsTable(){
    const { items } = this.props.sale;

    if (!items){
      return <div> Loading... </div>;
    }

    return (
      <Container>
        <Table size='small' sortable selectable color='black'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Competência</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Tipo</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Quantidade</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Valor</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Item</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { this.renderItems() }
          </Table.Body>
        </Table>
      </Container>
    )
  }


  renderItems(){
    const { items } = this.props.sale;

    const icons = { 'Licença': 'marker', 'SMS': 'comment', 'Doadores': 'users', 'Email': 'mail'}
    console.log(icons);

    return _.map(items, (item) => {
      return (
        <Table.Row key={item.id} >
          <Table.Cell textAlign='center'>{item.competency_date}</Table.Cell>
          <Table.Cell textAlign='center'>{item.kind}</Table.Cell>
          <Table.Cell textAlign='center'>{item.quantity}</Table.Cell>
          <Table.Cell textAlign='center'>{item.amount}</Table.Cell>
          <Table.Cell textAlign='center'>
            <Icon name={icons[item.kind]} size='big' />
          </Table.Cell>

        </Table.Row>
      );
    })
  }

  render(){
    const { sale } = this.props;

    if(!sale){
      return <div>Loading...</div>;
    }

    return(

      <Container>
        <Header icon as='h4' textAlign='center'>
          <Icon name='shop' color='orange'/>
          <Header.Content
            content={sale.product_name}
          />
        </Header>

        <Header icon as='h3'>
          <Header.Content
            content={sale.customer_name}
          />
        </Header>


        {this.renderItemsTable()}

        <Statistic size='mini'>
          <Statistic.Value>{ sale.value }</Statistic.Value>
          <Statistic.Label>total</Statistic.Label>
        </Statistic>
        
        <div>
          <a href={`http://localhost:3000/api/v1/sales/${sale.id}/invoice`}> download </a>
        </div>

        <Link to='/sales'>voltar</Link>
      </Container>
    );
  };

}

function mapStateToProps({ sales }, ownProps){
  return { sale: sales[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSale })(SalesShow);
