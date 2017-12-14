/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Input } from 'semantic-ui-react'
import Tabledata from './Tabledata'

const ContainerTimeline = () => (
  <div>
    <Container>
      <Header as='h2'>Password Manager by AhmadNizar</Header>
      <Input icon='search' placeholder='Search...' />
      <Tabledata/>
    </Container>
  </div>
)

export default ContainerTimeline
