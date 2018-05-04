import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSales } from '../actions'
import { Link } from 'react-router-dom';

import { Table, Header, Icon, Dropdown, Container, Dimmer, Loader, Segment } from 'semantic-ui-react'


class SalesIndex extends Component {
  componentDidMount() {
    this.props.fetchSales();
  }

  renderSalesRows(){
    const options = [
      { key: 1, text: 'Editar', value: 1 },
      { key: 2, text: 'remover', value: 2 },
    ]

    const trigger = (
      <span>
        <Icon name='setting' /> Opções
      </span>
    )

    return _.map(this.props.sales, (sale) => {
      return (
        <Table.Row key={sale.id} >
          <Table.Cell textAlign='center'>{sale.due_date}</Table.Cell>
          <Table.Cell>{sale.product_name}</Table.Cell>
          <Table.Cell>{sale.customer_name}</Table.Cell>
          <Table.Cell>{sale.value}</Table.Cell>
          <Table.Cell>
            <Dropdown item simple
              direction='right'
              trigger={trigger}
              options={options}
            />
          <Link to={`/sales/${sale.id}`}>ver</Link>
          </Table.Cell>
        </Table.Row>
      );
    })
  }

  renderSalesTable(){
    const { sales } = this.props;

    if (!sales){
      return (
        <div>
          <Dimmer active>
            <Loader active inline='centered'>Loading</Loader>
          </Dimmer>
        </div>
      )
    }

    return (
      <Container>
        <Table size='small' sortable selectable color='black'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Vencimento</Table.HeaderCell>
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Valor</Table.HeaderCell>
              <Table.HeaderCell>Detalhes</Table.HeaderCell>
          </Table.Row>
          </Table.Header>

          <Table.Body>
            { this.renderSalesRows() }
          </Table.Body>
        </Table>
      </Container>
    )
  }

  render(){
    return(
      <div>
        <Header icon as='h3' textAlign='center'>
          <Icon name='shop' color='orange'/>
          <Header.Content
            content='Vendas'
          />
        </Header>

        { this.renderSalesTable() }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { sales: state.sales };
}

export default connect(mapStateToProps, { fetchSales })(SalesIndex);
