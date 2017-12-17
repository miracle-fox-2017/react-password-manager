import React from 'react'
import { connect } from 'react-redux'
import { create, postAccount } from '../actions/actionManager'
import Chance from 'chance'

const chance = new Chance()
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      account: {
        id: chance.guid(),
        url: '',
        username: '',
        password: '',
        createdAt: new Date(),
        updatedAt: ''
      }
    }
    this.onChangeData = this.onChangeData.bind(this)
    this.postData = this.postData.bind(this)
  }

  postData (event) {
    event.preventDefault();
    // console.log(this.state.account)
    this.props.dataInput(this.state.account)
  }
  
  onChangeData (e) {
    let state = this.state.account
    state[e.target.name] = e.target.value

  } 
  render () {
    const { url, username, password } = this.state.account
    return (
      <div className="column">
        <form onSubmit = {this.postData}>
          <fieldset>
            <div className="form-group">
              <label>URL</label>
              <input type="text" className="form-control" name="url" placeholder="Url ..." onChange={this.onChangeData}/>
            </div>
            <div className="form-group">
              <label>Uername</label>
              <input type="text" className="form-control" name="username" placeholder="username..." onChange={this.onChangeData}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" placeholder="****" onChange={this.onChangeData}/>
            </div>
            <button className="ui button" type="submit">Save</button>
          </fieldset>
        </form>
      </div>
    )
  }  
}

const mapDispatchToProps = (dispatch) => ({
  dataInput: (dataAccount) => dispatch(postAccount(dataAccount)) 
})

export default connect(null, mapDispatchToProps)(Form)