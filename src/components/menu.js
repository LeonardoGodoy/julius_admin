import React, { Component } from 'react'
import { Menu, Segment, Image, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class MenuExample extends Component {
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
            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/customers' name='customers' active={activeItem === 'customers'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/sales' name='sales' active={activeItem === 'sales'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Container>
        </Menu>
    </div>
    )
  }
}
