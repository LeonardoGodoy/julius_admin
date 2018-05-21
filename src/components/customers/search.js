import React, { Component } from 'react'

import { Container, Input } from 'semantic-ui-react';
import { MyContext } from '../../contexts/my_context'


class CustomersSearch extends Component {

  constructor(props){
    super(props)
    this.state = { name: ''}
  }

  handleSearchChange = (e, { name }) => {
    const { value } = e.target
    this.setState({ name: value })
    this.props.fetchData({ name: value })
  }

  render(){
    const { loading } = this.props;
    const { name } = this.state;

    return (
      <div>
        <Container textAlign='right'>
          <Input
            loading={loading}
            icon='search'
            placeholder='Search...'
            onChange={this.handleSearchChange}
            value={name}
          />
        </Container>
      </div>
    )
  }
}

export default (props) => (
  <MyContext.Consumer>
    {(context) => ( <CustomersSearch {...context} {...props}/> )}
  </MyContext.Consumer>
)
