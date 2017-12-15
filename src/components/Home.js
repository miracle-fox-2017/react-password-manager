import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Spinning from 'grommet/components/icons/Spinning';
import TableHeader from 'grommet/components/TableHeader';
import Article from 'grommet/components/Article';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import FormTrashIcon from 'grommet/components/icons/base/FormTrash';
import FormEditIcon from 'grommet/components/icons/base/FormEdit';
import { connect } from 'react-redux'
import { getUsers } from '../actions'

class Home extends Component {
  componentWillMount () {
    this.props.getUsers()
  }
  render() {
    const load = this.props.allusers;
    let result = null
    console.log(load)
    if (load.length === 0) {
      result = <Spinning size='large'/>
    } else {
      result = 
      <Table>
        <TableHeader labels={['Url', 'Username', 'Password','Edit','Remove']}
          sortIndex={0}
          sortAscending={true} />
        <tbody>
          {load.map(user => {
            return (
            <TableRow>
              <td>
                {user.url}
              </td>
              <td>
                {user.username} 
              </td>
              <td>
                {user.password}
              </td>
              <td>
                <FormEditIcon />
              </td>
              <td>
                <FormTrashIcon />
              </td>
            </TableRow>
            )
          })}
        </tbody>
      </Table>
    }
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
        <br/>
        <Article scrollStep={false}>
          <Section pad='large'
            justify='center'
            align='center'>
              {result}
          </Section>
        </Article>
      </Section>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    allusers: state.allUsers.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)