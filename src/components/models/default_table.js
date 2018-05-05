import { Table, Container } from 'semantic-ui-react'

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
