import React from 'react'
import FormPage from './Form'
import { Container, Grid, Header } from 'semantic-ui-react'

const AddPage = (props) => {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Header as='h2' dividing>
              Add New User Password
            </Header>
            <FormPage/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default AddPage