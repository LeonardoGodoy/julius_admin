import React, { Component } from 'react'

import { Container, Input } from 'semantic-ui-react';
import { MyContext } from '../../contexts/my_context'

class CustomersShow extends Component {
  componentWillMount(){
    this.props.fetchSingleData({ id: 1 })
  }

  render(){
    console.log(this.props)
    const { data } = this.props;
    if(!data) return <div>loading...</div>

    return(
      <div>
        <h1>{data.name}</h1>
        + Varios dados
      </div>
    )
  }
}

export default (props) => (
  <MyContext.Consumer>
    {(context) => ( <CustomersShow {...context} {...props}/> )}
  </MyContext.Consumer>
)
