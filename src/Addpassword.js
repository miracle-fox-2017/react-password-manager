import React, { Component } from 'react';
import {connect} from 'react-redux'
import {savepassword} from './actions/passwordlist'

class Addpassword extends Component {
  constructor() {
    super()

    this.state = {
      newpass: {
        URL: '',
        username: '',
        password: ''
      },
      visiblehurufbesar: false,
      visiblehurufkecil: false,
      visibleangka: false,
      visiblespecialchar: false,
      visiblelength: false
    }
  }

  handleChange = (e) => {
    let newpass = Object.assign({}, this.state.newpass);
    newpass[e.target.name] = e.target.value
    this.setState({newpass})
  }

  handleSave =(e) => {
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
    }

    if(!(/[a-z]/.test(this.state.newpass.password))) {
      this.setState({
        visiblehurufkecil: true
      })

      kecil = false
    }

    if(!(/[0-9]/.test(this.state.newpass.password))) {
      this.setState({
        visibleangka: true
      })

      angka = false
    }

    if(!(/[#$@!&%]/.test(this.state.newpass.password))) {
      this.setState({
        visiblespecialchar: true
      })

      spesial = false
    }

    if(!(/[a-zA-Z0-9#$@!&%]{5}$/.test(this.state.newpass.password))) {
      this.setState({
        visiblelength: true
      })

      panjang = false
    }

    if(besar && kecil && spesial && angka && panjang) {
      this.props.savepassword(this.state.newpass)

      this.setState({
        visiblehurufbesar: false,
        visiblehurufkecil: false,
        visibleangka: false,
        visiblespecialchar: false,
        visiblelength: false
      })

      let newpass = Object.assign({}, this.state.newpass);
      newpass.URL = ''
      newpass.username = ''
      newpass.password = ''
      this.setState({newpass})
    }
  }

  render() {
    if(this.state.visiblehurufbesar) {
      var pesanbesar = <p id="widgetValidasiHurufBesar" className="form-text text-muted">Password harus memiliki setidaknya 1 huruf besar</p>
    }

    if(this.state.visiblehurufkecil) {
      var pesankecil = <p id="widgetValidasiHurufKecil" className="form-text text-muted">Password harus memiliki setidaknya 1 huruf kecil</p>
    }

    if(this.state.visibleangka) {
      var pesanangka = <p id="widgetValidasiAngka" className="form-text text-muted">Password harus memiliki setidaknya 1 angka</p>
    }

    if(this.state.visiblespecialchar) {
      var pesanspesial = <p id="widgetValidasiSpesialChar" className="form-text text-muted">Password harus memiliki setidaknya 1 spesial karakter(#$@!&%)</p>
    }

    if(this.state.visiblelength) {
      var pesanlength = <p id="widgetValidasiLength" className="form-text text-muted">Password harus minimal 5 karakter</p>
    }
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSave(e)
        }}>
          <fieldset>
            <legend>Password Form</legend>
            <div className="form-group">
              <label htmlFor="URL">URL</label>
              <input type="text" className="form-control" id="URL" aria-describedby="emailHelp" placeholder="URL" name="URL" value={this.state.newpass.URL} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" className="form-control" id="username" placeholder="username" name="username" value={this.state.newpass.username} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordkunci">Password</label>
              <input type="password" className="form-control" id="passwordkunci" placeholder="Password" name="password" value={this.state.newpass.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
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
    savepassword: (newpass) => dispatch(savepassword(newpass))
  }
}

const connectedAddpassword = connect(null, mapDispatchToProps)(Addpassword)
export default connectedAddpassword
