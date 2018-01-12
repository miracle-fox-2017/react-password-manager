import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Spinning from 'grommet/components/icons/Spinning'
import TableHeader from 'grommet/components/TableHeader'
import Article from 'grommet/components/Article'
import Table from 'grommet/components/Table'
import Edit from 'grommet/components/icons/base/Edit'
import Trash from 'grommet/components/icons/base/Trash'
import TableRow from 'grommet/components/TableRow'
import Timestamp from 'grommet/components/Timestamp'
import FormField from 'grommet/components/FormField'
import Form from 'grommet/components/Form'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import Footer from 'grommet/components/Footer'
import Label from 'grommet/components/Label'
import Status from 'grommet/components/icons/Status'
import PlatformCloudlinuxIcon from 'grommet/components/icons/base/PlatformCloudlinux'
import Modal from './EditUser'
import { connect } from 'react-redux'
import { getUsers, removeUser, updateUser, searchUsers } from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isOpen: false,
      form: {
        url: '',
        username: '',
        password: '',
        key: ''
      },
      search: '',
      statusError: null,
      statusURL: null,
      statusUsername: null,
      saveURL: true,
      saveUsername: true,
      savePassword: true,
      upper_case:true,
      lower_case:true,
      symbol: true,
      number: true,
      character: true
    }
  }
  toggleModal = (user) => {
    this.setState({
      isOpen: !this.state.isOpen,
      form: {
        url: user.url,
        username: user.username,
        password: user.password,
        key: user.key
      },
    })
  }
  onChanges = (e) => {
    let state = this.state.form
    let name = e.target.name
    let value = e.target.value
    if(name === 'url'){
      let trueUrl = /^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
      if(value.trim() === ''){
        this.setState({
          statusURL: 'URL tidak boleh kosong',
          saveURL: false
        })
      } else if (!trueUrl.test(value)) {
        this.setState({
          statusURL: 'URL belum benar',
          saveURL: false
        })
      }
      if(trueUrl.test(value)){
        this.setState({
          statusURL: null,
          saveURL: true
        })
      }
    } else if(name === 'username') {
      if(value.trim() === ''){
        this.setState({
          statusUsername: 'Username tidak boleh kosong',
          saveUsername: false
        })
      } 
      if(!/.{5,}/.test(value)){
        this.setState({
          statusUsername: 'Username tidak kurang dari 5 karakter',
          saveUsername: false
        })
      } 
      if(/.{5,}/.test(value)) {
        this.setState({
          statusUsername: null,
          saveUsername: true
        })
      }
    }
    this.setState(state[name]= value)
  }
  onChangesValidation = (e) => {
    let strengthPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/
    let password = e.target.value
    let state = this.state.form
    if(strengthPassword.test(password)) {
      this.setState({
        statusError: null,
        savePassword: true
      })
    }
    if(password.trim() === ''){
      this.setState({
        statusError: 'Password tidak boleh kosong',
        savePassword: false
      })
    } 
    if(!/(?=.*?[a-z])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 huruf kecil',
        lower_case:false,
        savePassword: false
      })
    } else {
      this.setState({
        lower_case:true,
      })
    }
     if(!/(?=.*?[A-Z])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 huruf besar',
        upper_case:false,
        savePassword: false
      })
    } else {
      this.setState({
        upper_case:true,
      })
    }
     if(!/(?=.*?[0-9])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 angka',
        number: false,
        savePassword: false
      })
    } else {
      this.setState({
        number:true,
      })
    }
     if(!/(?=.*?[^\w\s])/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 1 symbol',
        symbol: false,
        savePassword: false
      })
    } else {
      this.setState({
        symbol:true,
      })
    }
     if(!/.{5,}/.test(password)) {
      this.setState({
        statusError: 'Password harus memiliki setidaknya 5 karakter',
        character: false,
        savePassword: false
      })
    } else {
      this.setState({
        character:true,
      })
    }
    this.setState(state[e.target.name]= password)
  }
  onChangeQuery = (e) => {
    let search = e.target.value
    this.props.searchUsers(search)
    this.setState({[e.target.name]: search})
  }
  componentWillMount () {
    this.props.getUsers()
  }
  render() {
    const load = this.props.allusers
    let result = null
    console.log(load)
    if (load.length === 0) {
      result = <Spinning size='large'/>
    } else {
      result = 
      <Table>
        <TableHeader labels={['Url', 'Username', 'Password','Created At', 'UpdatedAt','Edit','Remove']}
          sortIndex={0}
          sortAscending={true} />
        <tbody>
          {load.map(user => {
            return (
              <TableRow key={Math.random()}>
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
                  <Timestamp value={ user.createdAt ? user.createdAt : 'Not Set'} fields='date' />
                </td>
                <td>
                  <Timestamp value={ user.updatedAt ? user.updatedAt : 'Never update'} fields='date' />
                </td>
                <td>
                <Button icon={<Edit />}
                  onClick={() => this.toggleModal(user)}/>
                </td>
                <td>
                <Button icon={<Trash />}
                  onClick={() => this.props.removeUser(user)}/>
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
            dropAlign={{"right": "right"}}
            name='search'
            value={this.state.search}
            onDOMChange={ this.onChangeQuery }
            />
        </Box>
        <br/>
        <Article scrollStep={false}>
          <Section pad='large'
            justify='center'
            align='center'>
              {result}
          </Section>
        </Article>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <Form>
            <FormField 
              label='URL*' 
              error={this.state.statusURL}
              >
              <TextInput 
                name='url' 
                value={ this.state.form.url } 
                onDOMChange={ this.onChanges } 
                />
            </FormField>
            <br/>
            <FormField 
              label='Username*' 
              error={this.state.statusUsername}
              >
              <TextInput 
                name='username' 
                value={ this.state.form.username } 
                onDOMChange={ this.onChanges } 
                />
            </FormField>
            <br/>
            <FormField 
              label='Password*' 
              error={this.state.statusError}
              >
              <TextInput 
                name='password' 
                type='password' 
                value={ this.state.form.password } 
                onDOMChange={ this.onChangesValidation } 
                />
            </FormField>
            <Label>
              <p>
                <Status value={this.state.upper_case ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter huruf besar (upper-case)<br/>
                <Status value={this.state.lower_case ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter huruf kecil (lower-case) <br/>
                <Status value={this.state.symbol ? 'ok':'critical'}/> Password harus memiliki setidaknya satu karakter spesial (@#$%...) <br/>
                <Status value={this.state.number ? 'ok':'critical'}/> Password harus memiliki setidaknya satu angka (number) <br/>
                <Status value={this.state.character ? 'ok':'critical'}/> Password harus memiliki setidaknya panjang (length) 5 karakter <br/>
              </p>
            </Label>
            <Footer 
              pad={{"vertical": "medium"}}
              >
              <Button 
              icon={<PlatformCloudlinuxIcon />}
              label='Save'
              primary={ true }
              onClick={ this.state.savePassword && this.state.saveURL && this.state.saveUsername ? () => this.props.updateUser(this.state.form) : null }
              />
            </Footer>
          </Form>
        </Modal>
      </Section>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    allusers: state.allUsers.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    removeUser: user => dispatch(removeUser(user)),
    updateUser: user => dispatch(updateUser(user)),
    searchUsers: keyword => dispatch(searchUsers(keyword))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)