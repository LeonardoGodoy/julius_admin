import React, { Component } from "react";

import { Form, Dropdown, Container, TextArea, Input, Label } from "semantic-ui-react";

class ProductForm extends Component {
  state = {
    data: {
      name: '',
      kind: '',
      description: '',
      value: 199.00,
    },
    loading: false,
    errors: {}
  }

  onChange = (e) => {
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

  listKinds = () =>{
    return [
      { value: '1', text: 'guara' },
      { value: '2', text: 'f2f' },
      { value: '3', text: 'fichas' },
      { value: '4', text: 'colab' }
    ]
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit} loading={loading} className="login-form">
          <Form.Field>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={data.name}
              onChange={this.onChange}
            />
          </Form.Field>

          <Input
            labelPosition='left'
            label='R$'
            type='text'
            placeholder='Amount'
            name="value"
            placeholder="Valor"
            value={data.value}
            onChange={this.onChange}
          />


          <Form.Field>
            <label htmlFor="kind">Tipo</label>
            <Dropdown
              fluid
              selection
              placeholder='Selecione tipo'
              name='kind'
              options={this.listKinds()}
              onChange={this.onChangeOption}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="description">Descrição</label>
            <TextArea
              rows={2}
              id="description"
              name="description"
              placeholder="Descrição"
              value={data.description}
              onChange={this.onChange}
            />
          </Form.Field>

          <button className="login-submit">Adicionar</button>
        </Form>
      </Container>
    )
  }
}

export default ProductForm;
