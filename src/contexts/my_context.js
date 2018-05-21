import React, { Component } from 'react'

import { withApollo } from 'react-apollo';
import fetchCustomers from '../queries/fetch_customers';
import fetchCustomer from '../queries/fetch_customer';


export const MyContext = React.createContext();

class Provider2 extends Component {
  state = {
    data: null,
    errors: null,
    loading: true,
    fetchData: () => {}
  }

  fetchData = async (values) => {
    console.log('I will make a request');
    this.setState({ loading: true })

    const result = await this.props.client.query({
      query: fetchCustomers,
      variables: {
        name: values.name,
        order: 'name',
        page: 1,
        per_page: 10
      },
    })
    console.log(result);

    const { loading, data: { customers } } = result

    this.setState({ data: customers, loading })
  }

  fetchSingleData = async (values) => {
    this.setState({ loading: true })
    const result = await this.props.client.query({
      query: fetchCustomer,
      variables: { id: values.id },
    })

    const { loading, data: { customer } } = result
    this.setState({ data: customer, loading })
  }

  render(){
    return(
      <MyContext.Provider value={{
        data: this.state.data,
        fetchData: this.fetchData,
        fetchSingleData: this.fetchSingleData,
        loading: this.state.loading,
        errors: this.state.errors
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export const Provider = withApollo(Provider2);
