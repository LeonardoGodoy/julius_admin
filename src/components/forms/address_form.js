import React, { Component } from "react";

import { Form, Dropdown, Container, TextArea, Input, Label, Radio } from "semantic-ui-react";

class AddressForm extends Component {

  state = {
    data: {
      complement: '',
      neighbourhood: '',
      number: '',
      street: '',
      zipcode: '',
      city_name: '',
    },
    loading: false,
    errors: {}
  }

  onChange = (e) => {
    console.log('Changes..');
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    })
  }

  onChangeOption = (e, option) => {
    this.setState({
      data: {
        ...this.state.data,
        [option.name]: option.value
      }
    })
  }

  onSubmit = () => {
    console.log("State")
    console.log(this.state)
    console.log("Props")
    console.log(this.props)
  }

  validate = data => {
    const errors = {}
    // if (!data.team)  errors.team = "Can't be blank";
    // if (!data.leader_user)  errors.leader_user = "Can't be blank";
    return errors
  }

  listPersonTypes = () =>{
    return [
      { value: 'legal', text: 'jurídica' },
      { value: 'natural', text: 'física' },
    ]
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit} loading={loading} className="login-form">

          <Form.Field>
            <label htmlFor="zipcode">CEP</label>
            <Input
              type="text"
              name="zipcode"
              placeholder="00.000.000"
              value={data.zipcode}
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="street">Rua</label>
            <Input
              type="text"
              name="street"
              placeholder="Rua"
              value={data.street}
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="number">Número</label>
            <Input
              type="text"
              name="number"
              placeholder="Número"
              value={data.number}
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="neighbourhood">Bairro</label>
            <Input
              type="text"
              name="neighbourhood"
              placeholder="Bairro"
              value={data.neighbourhood}
              onChange={this.onChange}
            />
          </Form.Field>


          <Form.Field>
            <label htmlFor="complement">Complemento</label>
            <Input
              type="text"
              name="complement"
              placeholder="Complemento"
              value={data.complement}
              onChange={this.onChange}
            />
          </Form.Field>


          <Form.Field>
            <label htmlFor="person_type">Tipo</label>
            <Dropdown
              fluid
              selection
              placeholder='Selecione tipo'
              name='person_type'
              options={this.listPersonTypes()}
              onChange={this.onChangeOption}
            />
          </Form.Field>

          <button className="login-submit">Adicionar</button>
        </Form>
      </Container>
    )
  }
}

export default AddressForm;
