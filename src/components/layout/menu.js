import React, { Component } from 'react'
import { Menu, Segment, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class AppMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary color='orange'>
          <Container>
            <Menu.Item>
              <Image src='/assets/images/logo.png' size='small' />
            </Menu.Item>
            <Menu.Item as={Link} to='/' content='Início' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/customers' content='Clientes' name='customers' active={activeItem === 'customers'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/contracts' content='Contratos' name='contracts' active={activeItem === 'contracts'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/products' content='Produtos' name='products' active={activeItem === 'products'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/sales' content='Vendas' name='sales' active={activeItem === 'sales'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}
