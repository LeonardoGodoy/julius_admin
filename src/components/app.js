import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import Statistic from './statistic'

export default class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Header as='h2' icon textAlign='center'>
            <Icon name='marker' color='orange' />
            <Header.Content>
              Julius Trackmob
            </Header.Content>

            <Container>

            </Container>
          </Header>

        </Container>
      </div>
    );
  }
}

//<Statistic/>
