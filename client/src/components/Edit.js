import React from 'react'
import { connect } from 'react-redux'
import { edit_user } from '../actions'
import { Route, Link, Redirect } from 'react-router-dom'

class Edit extends React.Component {
  constructor (props) {
    super(props)

    this.state =  {
      id: '',
      url: '',
      username: '',
      password: '',
      updatedAt: '',
      upperCase: false, // KARAKTER HURUF BESAR
      lowerCase: false, // KARAKTER HURUF KECIL
      specialCase: false, // KARAKTER SPECIAL
      minimalCase: false, // MINIMAL 1 ANGKA
      lengthCase: false, // MINIMAL 5 KARAKTER
      redirect: false
    }
    this.editUrl = this.editUrl.bind(this)
    this.editUsername = this.editUsername.bind(this)
    this.editPassword = this.editPassword.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  editUrl (e) {
    this.setState({url: e.target.value})
  }

  editUsername (e) {
    this.setState({username: e.target.value})
  }

  editPassword (e) {
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
      return day +' '+ monthNames[monthIndex] +' '+ year +' pukul '+hours +':'+ minutes;
  }

  editUser (e) {
    if (this.state.lowerCase && this.state.upperCase && this.state.specialCase && this.state.minimalCase && this.state.lengthCase) {
      let edit = {
        id: this.state.id,
        url : this.state.url,
        username: this.state.username,
        password: this.state.password,
        createdAt: this.tanggal(new Date()),
        updatedAt: this.tanggal(new Date())
      }
      this.props.edit_user(edit)
      alert('Success Edit to Firebase')
      e.preventDefault()
      this.setDefault()
      this.setState({
        redirect: true
      })
    } else {
      alert('GAGAL EDIT KARENA VALIDATION');
      e.preventDefault()
      this.setDefault()
    }
  }

  componentWillMount () {
    this.setState({
      id: this.props.id,
      url: this.props.data.url,
      username: this.props.data.username,
      password: this.props.data.password
    })
  }

  render () {
    return (

      <div className="container">
      {this.state.redirect && <Redirect to={'/'} />}
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="url" className="col-lg-2 control-label">URL</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.state.url} onChange={this.editUrl} id="url" placeholder="http://hacktiv8.com/ " type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="col-lg-2 control-label">Username</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.state.username} onChange={this.editUsername} id="username" placeholder="Rizafahmi" type="text"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="col-lg-2 control-label">Password</label>
            <div className="col-lg-10">
              <input className="form-control" value={this.state.password} onChange={this.editPassword} id="password" placeholder="*******" type="password"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" onClick={ () => this.editUser()} className="btn btn-primary">Edit</button>
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

const mapState = (state,props) => {
  let hasil = state.Form.form.find(user => user.id === props.match.params.id)
  return {
    id: props.match.params.id,
    data: hasil
  }
}

const mapAction = (dispatch) => {
  return {
    edit_user: (edit) => dispatch(edit_user(edit))
  }
}

export default connect (mapState, mapAction)(Edit)
