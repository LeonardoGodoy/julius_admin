import React, { Component } from 'react';

import { Card, Feed, Icon, Statistic, List } from 'semantic-ui-react'


class ItemsCard extends Component {

  render(){
    const icons = { 'Licença': 'marker', 'SMS': 'comment', 'Doadores': 'users', 'Email': 'mail'}
    const { competency, items } = this.props;

    return(


      <Card>
        <Card.Content>
          <Card.Header>
            Items de {competency}
          </Card.Header>
        </Card.Content>
        <Card.Content>

          <List divided relaxed>
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
            <List.Description as='a'>Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>

            <List.Description>
              <Statistic size='mini'>
                <Statistic.Value>{items[0].quantity}</Statistic.Value>
                <Statistic.Label>{items[0].kind}</Statistic.Label>
              </Statistic>

              <Statistic size='mini'>
                <Statistic.Value>{items[0].amount}</Statistic.Value>
                <Statistic.Label>TOTAL</Statistic.Label>
              </Statistic>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
            <List.Description as='a'>Updated 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>

        </Card.Content>
        <Card.Content>
          <Statistic size='mini'>
            <Statistic.Value>{items[0].quantity}</Statistic.Value>
            <Statistic.Label>{items[0].kind}</Statistic.Label>

          </Statistic>
          <Statistic value={items[0].amount} />

        </Card.Content>

        <Card.Content>
          <Statistic size='mini'>
            <Statistic.Value>{items[1].quantity}</Statistic.Value>
            <Statistic.Label>{items[1].kind}</Statistic.Label>

          </Statistic>
          <Statistic value={items[1].amount} />

        </Card.Content>

        <Card.Content>
          <Feed>
            <Feed.Event>

              <Feed.Label >
                <Icon name={icons[items[0].kind]} size='big' />
              </Feed.Label>

              <Feed.Content>
                <Feed.Date content='1 day ago' />
                <Feed.Summary>
                  <Icon.Group size='large'>
                    <Icon name='calendar outline' />
                  </Icon.Group>

                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>

        </Card.Content>
      </Card>
    );
  }

  rederItemsCard(){
    const { items } = this.props;
    console.log(items)
    //return this.renderCard();
  }
}

export default ItemsCard;
