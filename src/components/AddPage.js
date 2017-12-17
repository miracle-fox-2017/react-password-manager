import React, { Component } from 'react'
import FormPage from './Form'
import { Container, Grid, Header } from 'semantic-ui-react'

class AddPage extends Component {
  render() {
    console.log(this)
    return (
      <Container>
        <Grid stackable>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Header as='h2' dividing>
                Add New User Password
              </Header>
              <FormPage props={this.props.props}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default AddPage