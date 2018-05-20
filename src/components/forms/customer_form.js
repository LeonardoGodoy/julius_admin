import React, { Component } from "react";

import { Form, Dropdown, Container, TextArea, Input, Label, Radio } from "semantic-ui-react";

import AddressForm from './address_form'
class CustomerForm extends Component {

  state = {
    data: {
      active: true,
      name: '',
      document: '',
      person_type: '',
      social_name: '',
      iss_retention: false,
      address: {
        complement: '',
        neighbourhood: '',
        number: '',
        street: '',
        zipcode: '',
        city_name: '',
      }
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

  onChangeRadio = (e) => {
    console.log(e.currentTarget.id);
    this.setState({
      data: {...this.state.data, [e.currentTarget.id]: !this.state.data[e.currentTarget.id]}
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
            <label htmlFor="active">Ativo</label>
            <Radio
              toggle
              id="active"
              name="active"
              checked={data.active}
              onChange={this.onChangeRadio}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="iss_retention">Retenção de iss</label>
            <Radio
              toggle
              id="iss_retention"
              name="iss_retention"
              checked={data.iss_retention}
              onChange={this.onChangeRadio}
            />
          </Form.Field>


          <Form.Field>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={data.name}
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="social_name">Nome Social</label>
            <Input
              type="text"
              name="social_name"
              placeholder="JULIUS TRACKMOB LTDA."
              value={data.social_name}
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

          <Form.Field>
            <label htmlFor="document">Documento</label>
            <Input
            type='text'
            name="document"
            placeholder="000.000.000-00"
            value={data.document}
            onChange={this.onChange}
            />
          </Form.Field>

          <button className="login-submit">Adicionar</button>
        </Form>
      </Container>
    )
  }
}

export default CustomerForm;
