import React from 'react'
import { connect } from 'react-redux'
import { postUser } from '../actions'
import logo from '../user.png';

class Form extends React.Component {
constructor (props) {
  super (props)

  this.state = {
    url: "",
    username: "",
    password: "",
    upperCase: false, // KARAKTER HURUF BESAR
    lowerCase: false, // KARAKTER HURUF KECIL
    specialCase: false, // KARAKTER SPECIAL
    minimalCase: false, // MINIMAL 1 ANGKA
    lengthCase: false // MINIMAL 5 KARAKTER
  }
  this.changeUrl = this.changeUrl.bind(this)
  this.changeUsername = this.changeUsername.bind(this)
  this.changePassword = this.changePassword.bind(this)
  this.addUser = this.addUser.bind(this)
}

changeUrl (e) {
  this.setState({url: e.target.value})
}

changeUsername (e) {
  this.setState({username: e.target.value})
}

changePassword (e) {
  this.setState({password: e.target.value})
  //REGEX
  const rgXUpperCase = new RegExp("^(?=.*[A-Z])")
  const rgXLowerCase = new RegExp("^(?=.*[a-z])")
  const rgXMinimalCase = new RegExp("^(?=.*[0-9])")
  const rgXSpecialCase = new RegExp("^(?=.*[!@#\$%\^&\*])")
  const rgXLengthCase = new RegExp("^(?=.{5,})")
  //TRUE OR FALSE REGEX-NYA
  const statusrgXUpperCase = rgXUpperCase.test(this.state.password)
  const statusrgXLowerCase = rgXLowerCase.test(this.state.password)
  const statusrgXMinimalCase = rgXMinimalCase.test(this.state.password)
  const statusrgXSpecialCase = rgXSpecialCase.test(this.state.password)
  const statusrgXLengthCase = rgXLengthCase.test(this.state.password)

  //KONDISI
  if (statusrgXLengthCase) {
    this.setState({lengthCase: true})
  }

  if (statusrgXUpperCase) {
    this.setState({upperCase: true})
  }

  if (statusrgXLowerCase) {
    this.setState({lowerCase: true})
  }

  if (statusrgXMinimalCase) {
    this.setState({minimalCase: true})
  }

  if (statusrgXSpecialCase) {
    this.setState({specialCase: true})
  }
}

tanggal (date) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes()
    return day +' '+ monthNames[monthIndex] +' '+ year +' '+' pukul '+hours +':'+ minutes;
}

addUser (e) {
  if (this.state.lowerCase && this.state.upperCase && this.state.specialCase && this.state.minimalCase && this.state.lengthCase) {
    let form = {
      url : this.state.url,
      username: this.state.username,
      password: this.state.password,
      createdAt: this.tanggal(new Date()),
      updatedAt: this.tanggal(new Date())
    }
    this.props.postUser(form)
    alert('Success Added to Firebase')
    this.setDefault()
    e.preventDefault()
  } else {
    alert('GAGAL POST KARENA VALIDATION');
    this.setDefault()
    e.preventDefault()
  }
}

setDefault (e) {
    this.setState({
      id: '',
      url: '',
      username: '',
      password: '',
      createdAt: '',
      updatedAt: '',
      upperCase: false,
      lowerCase: false,
      specialCase: false,
      minimalCase: false,
      lengthCase: false
    });
}

render () {
  return (
    <div className="container">
    <form className="form-horizontal">
      <fieldset>
        <h1>+Register User <img src={logo} style={{width:"50px"}} alt="logo"/></h1>
        <div className="form-group">
          <label htmlFor="url" className="col-lg-2 control-label">URL</label>
          <div className="col-lg-10">
            <input className="form-control" value={this.state.url} onChange={this.changeUrl} id="url" placeholder="http://hacktiv8.com/ " type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username" className="col-lg-2 control-label">Username</label>
          <div className="col-lg-10">
            <input className="form-control" value={this.state.username} onChange={this.changeUsername} id="username" placeholder="Rizafahmi" type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input className="form-control" value={this.state.password}onChange={this.changePassword} id="password" placeholder="*******" type="password"/>
          </div>
        </div>

        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="submit" onClick={this.addUser} className="btn btn-primary">Save</button>
          </div>
        </div>
      </fieldset>
      </form>

      <div>
        <table style={{marginLeft:"200px"}}>
          <tr align="left">
            <td colSpan="2"><h3>PASSWORD STRENGTH</h3></td>
          </tr>
          <tr>
            <td>{this.state.upperCase ? <input type="checkbox" checked disabled/> : <input type="checkbox" disabled/>}</td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter huruf besar ( UPPER-CASE )</b></h5></td>
          </tr>
          <tr>
            <td>{this.state.lowerCase ? <input type="checkbox" checked disabled/> : <input type="checkbox" disabled/>}</td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter huruf kecil ( LOWER-CASE )</b></h5></td>
          </tr>
          <tr>
            <td>{this.state.specialCase ? <input type="checkbox" checked disabled/> : <input type="checkbox" disabled/>}</td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter SPECIAL ( #$@!&%... )</b></h5></td>
          </tr>
          <tr>
            <td>{this.state.minimalCase ? <input type="checkbox" checked disabled/> : <input type="checkbox" disabled/>}</td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu ANGKA</b> </h5></td>
          </tr>
          <tr>
            <td>{this.state.lengthCase ? <input type="checkbox" checked disabled/> : <input type="checkbox" disabled/>}</td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki panjang (length) <b> lebih dari 5 CHARACTER </b></h5></td>
          </tr>
        </table>
      </div>
    </div>
  )
 }
}

const mapState = (state) => {
  return {

  }
}

const mapAction = (dispatch) => {
  return {
    postUser: (form) => dispatch(postUser(form))
  }
}

export default connect (null,mapAction)(Form)
