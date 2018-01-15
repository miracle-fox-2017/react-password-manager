import React, { Component } from 'react';

class PasswordWidget extends Component {
  render() {

    return (
      <div style={{ margin: '20px 0px' }} className="text-center">
        <fieldset style={{ margin: "20px 0px" }} className="checkbox text-left">
          <p className="text-center">Password Strength :</p>
          <input type="checkbox" checked={this.props.upperCase} /> Password harus memiliki setidaknya satu karakter huruf besar (upper-case)<br />
          <input type="checkbox" checked={this.props.lowerCase} /> Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)<br />
          <input type="checkbox" checked={this.props.specialCharacter} /> Password harus memiliki setidaknya satu karakter spesial (#$%@!%&..)<br />
          <input type="checkbox" checked={this.props.oneNumber} /> Password harus memiliki setidaknya satu angka<br />
          <input type="checkbox" checked={this.props.fiveChar} /> Password harus memiliki panjang (length) lebih dari 5 karakter<br />
        </fieldset>
      </div>
    )
  }
}

export default PasswordWidget
