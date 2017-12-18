import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updatepassword} from './actions/passwordlist'
import {Link} from 'react-router-dom'
import history from './history';

class EditPassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newpass: {
        URL: '',
        username: '',
        password: '',
      },
      visiblehurufbesar: false,
      visiblehurufkecil: false,
      visibleangka: false,
      visiblespecialchar: false,
      visiblelength: false
    }
    console.log('ini dari edit', props.match.params.id)
  }

  componentWillMount() {
    let newpass = Object.assign({}, this.state.newpass);
    newpass.URL = this.props.location.state.editpass.URL
    newpass.username = this.props.location.state.editpass.username
    newpass.password = this.props.location.state.editpass.password
    this.setState({newpass})
  }

  handleChange = (e) => {
    let newpass = Object.assign({}, this.state.newpass);
    newpass[e.target.name] = e.target.value
    this.setState({newpass})
    console.log(this.state.newpass.URL)
  }

  handleUpdate =(e) => {
    e.preventDefault()

    var besar = true
    var kecil = true
    var spesial = true
    var angka = true
    var panjang = true

    if(!(/[A-Z]/.test(this.state.newpass.password))) {
      this.setState({
        visiblehurufbesar: true
      })
      besar = false
      console.log('besar:', besar);
    }

    if(!(/[a-z]/.test(this.state.newpass.password))) {
      this.setState({
        visiblehurufkecil: true
      })

      kecil = false
      console.log('kecil:',kecil)
    }

    if(!(/[0-9]/.test(this.state.newpass.password))) {
      this.setState({
        visibleangka: true
      })

      angka = false
      console.log('angka:', angka)
    }

    if(!(/[#$@!&%]/.test(this.state.newpass.password))) {
      this.setState({
        visiblespecialchar: true
      })

      spesial = false
      console.log('spesial:', spesial)
    }

    if(!(/[a-zA-Z0-9#$@!&%]{5}$/.test(this.state.newpass.password))) {
      this.setState({
        visiblelength: true
      })

      panjang = false
      console.log('panjang:', panjang)
    }

    if(besar && kecil && spesial && angka && panjang) {
      this.props.updatepassword(this.state.newpass, this.props.match.params.id)
      this.setState({
        visiblehurufbesar: false,
        visiblehurufkecil: false,
        visibleangka: false,
        visiblespecialchar: false,
        visiblelength: false
      })
      this.props.history.push('/')
    }
  }

  render() {
    if(this.state.visiblehurufbesar) {
      var pesanbesar = <p id="emailHelp" className="form-text text-muted">Password harus memiliki setidaknya 1 huruf besar</p>
    }

    if(this.state.visiblehurufkecil) {
      var pesankecil = <p id="emailHelp" className="form-text text-muted">Password harus memiliki setidaknya 1 huruf kecil</p>
    }

    if(this.state.visibleangka) {
      var pesanangka = <p id="emailHelp" className="form-text text-muted">Password harus memiliki setidaknya 1 angka</p>
    }

    if(this.state.visiblespecialchar) {
      var pesanspesial = <p id="emailHelp" className="form-text text-muted">Password harus memiliki setidaknya 1 spesial karakter(#$@!&%)</p>
    }

    if(this.state.visiblelength) {
      var pesanlength = <p id="emailHelp" className="form-text text-muted">Password harus minimal 5 karakter</p>
    }
    return (
        <div className="container">
        <form onSubmit={this.handleUpdate}>
          <fieldset>
            <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="URL">URL</label>
              <input type="text" className="form-control" id="URL" aria-describedby="emailHelp" placeholder="URL" name="URL" defaultValue={this.state.newpass.URL} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" className="form-control" id="username" placeholder="username" name="username" defaultValue={this.state.newpass.username} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordkunci">Password</label>
              <input type="text" className="form-control" id="passwordkunci" placeholder="Password" name="password" defaultValue={this.state.newpass.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </fieldset>
        </form>
        {pesanbesar}
        {pesankecil}
        {pesanangka}
        {pesanspesial}
        {pesanlength}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatepassword: (newpass, key) => dispatch(updatepassword(newpass, key))
  }
}

const connectedEditpassword = connect(null, mapDispatchToProps)(EditPassword)
export default connectedEditpassword
