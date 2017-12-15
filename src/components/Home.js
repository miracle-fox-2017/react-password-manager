import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import { connect } from 'react-redux'
import { getUsers } from '../actions'

class Home extends Component {
  componentWillMount () {
    this.props.getUsers()
  }
  render() {
    return (
      <Section>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Search inline={true}
            fill={true}
            size='small'
            placeHolder='Cari'
            dropAlign={{"right": "right"}} />
        </Box>
        {JSON.stringify(this.props.allusers)}
      </Section>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    allusers: state.allUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)