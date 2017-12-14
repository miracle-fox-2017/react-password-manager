import React from 'react'
import { connect } from 'react-redux'
import logo from '../user.png';

class Form extends React.Component {
constructor (props) {
  super (props)

  this.state = {
    url: "",
    username: "",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    upperCase: false, // KARAKTER HURUF BESAR
    lowerCase: false, // KARAKTER HURUF KECIL
    specialCase: false, // KARAKTER SPECIAL
    minimalCase: false, // MINIMAL 1 ANGKA
    lengthCase: false // MINIMAL 5 KARAKTER
  }
}

addUser () {
  console.log('MASUK SINI');
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
            <input className="form-control" onChange={(e) => this.setState({url: e.target.value})} id="url" placeholder="http://hacktiv8.com/ " type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username" className="col-lg-2 control-label">Username</label>
          <div className="col-lg-10">
            <input className="form-control" onChange={(e) => this.setState({username: e.target.value})} id="username" placeholder="Rizafahmi" type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input className="form-control" onChange={(e) => this.setState({password: e.target.value})} id="password" placeholder="*******" type="password"/>
          </div>
        </div>

        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="submit" onClick={(e) => {e.preventDefault();this.addUser()}} className="btn btn-primary">Save</button>
          </div>
        </div>
      </fieldset>
      </form>

      <div>
        <table style={{marginLeft:"200px"}}>
          <tr align="left">
            <td colspan="2"><h3>PASSWORD STRENGTH</h3></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter huruf besar ( UPPER-CASE )</b></h5></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter huruf kecil ( LOWER-CASE )</b></h5></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu karakter SPECIAL ( #$@!&%... )</b></h5></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td align="left"><h5>&nbsp;&nbsp;Password harus memiliki setidaknya <b> satu ANGKA</b> </h5></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
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

  }
}

export default Form
