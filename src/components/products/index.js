import React, { Component } from 'react'

import { withApollo } from 'react-apollo'
import gql from 'graphql-tag';

import fetchProducts from '../../queries/fetch_products'

import { Header, Container, Table, Icon, Checkbox, Search, Grid } from 'semantic-ui-react';

class ProductsIndex extends Component {
  componentWillMount() {
    this.state = { name: '', products: null }
    this._executeSearch()
  }

  resetComponent = () => this.setState({ name: '' })

  handleSearchChange = (e, { name }) => {
    const { value } = e.target
    this.setState({ name: value })
    console.log(this.state.name)
    this._executeSearch();
  }

  renderSearchBar(){
    const { name } = this.state;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            showNoResults={false}
            category
            loading={false}
            onSearchChange={this.handleSearchChange}
            value={name}
          />
        </Grid.Column>
      </Grid>
    )
  }

  render(){
    const { products } = this.state;
    console.log(products);
    if(!products) return (<p>Loading...</p>);

    return(
      <div>
        {this.renderSearchBar()}
        {products.map((product) => {
          return(
            <p>{product.name}</p>
          );
        })}
      </div>
    );
  }

  _executeSearch = async () => {
    const { name } = this.state

    const result = await this.props.client.query({
      query: fetchProducts,
      variables: { name },
    })

    const products = result.data.products
    this.setState({ products })
  }
}

export default withApollo(ProductsIndex);
