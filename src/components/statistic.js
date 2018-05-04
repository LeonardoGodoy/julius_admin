import React from 'react'
import { Statistic } from 'semantic-ui-react'

const StatisticExampleGroup = () => (
  <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>Altos</Statistic.Value>
        <Statistic.Label>Contratos</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>31,200</Statistic.Value>
        <Statistic.Label>Views</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>72</Statistic.Value>
        <Statistic.Label>Clientes</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
)

export default StatisticExampleGroup
