import React, { Component } from 'react';
import './../App.css';
import Header from './Header'
import { connect } from 'react-redux'
import { inputNewDataProfile} from '../actions/profileAction'
class Home extends Component {
  constructor() {
    super()

    this.state = {
      profile: {
        url: '',
        username: '',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.inputDataProfile = this.inputDataProfile.bind(this)
  }
  handleInputChange(event) {
    let profile = this.state.profile
    profile[event.target.name] = event.target.value
    this.setState({
      profile
    })
  }
  inputDataProfile(event) {
    event.preventDefault()
    this.props.inputDataProfile(this.state.profile)
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row row-centered">
            <div className="col-md-6 col-centered">
              <form onSubmit={this.inputDataProfile} className="inputForm">
                <div className="form-group">
                  URL:
                    <input type="text" className="form-control" placeholder="Enter URL" name="url" value={this.state.url} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  Username:
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" value={this.state.profile.username} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  Password:
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.profile.password} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-default">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    inputDataProfile: (profile) => dispatch(inputNewDataProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
