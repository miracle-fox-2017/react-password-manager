import React, { Component } from 'react'

class PasswordWidget extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	accountId: '',
	  	siteUrl: '',
	  	siteUsername: '',
	  	sitePassword: ''
	  };
	}

	saveAccount() {
		alert("Save Account")
	}

	handleFormInput(e) {
		this.setState({
			[e.target.name] : e.target.value
		})

		this.validateInput(e)
	}

	validateInput(e) {
		if (e.target.name === 'sitePassword') {
			const password = e.target.value
			const checkUppercase = document.querySelector("#check-uppercase")
			const checkLowercase = document.querySelector("#check-lowercase")
			const checkLength = document.querySelector("#check-length")
			const checkNumber = document.querySelector("#check-number")
			const checkSpecial = document.querySelector("#check-special")

			const lowerCaseRegex= /[a-z]/g;
			const upperCaseRegex= /[A-Z]/g;
			const numberRegex= /[0-9]/g;
			const specialRegex= /[#?!@$%^&*-]/g;

			if(password.match(lowerCaseRegex)) {
				checkLowercase.classList.remove("alert-danger");
				checkLowercase.classList.add("alert-success");

			} else {
				checkLowercase.classList.remove("alert-success");
				checkLowercase.classList.add("alert-danger");
			}

			if(password.match(upperCaseRegex)) {
				checkUppercase.classList.remove("alert-danger");
				checkUppercase.classList.add("alert-success");

			} else {
				checkUppercase.classList.remove("alert-success");
				checkUppercase.classList.add("alert-danger");
			}

			if(password.match(numberRegex)) {
				checkNumber.classList.remove("alert-danger");
				checkNumber.classList.add("alert-success");

			} else {
				checkNumber.classList.remove("alert-success");
				checkNumber.classList.add("alert-danger");
			}

			if(password.match(specialRegex)) {
				checkSpecial.classList.remove("alert-danger");
				checkSpecial.classList.add("alert-success");

			} else {
				checkSpecial.classList.remove("alert-success");
				checkSpecial.classList.add("alert-danger");
			}

			if (password.length > 5) {
				checkLength.classList.add("alert-success");
				checkLength.classList.remove("alert-danger");
			} else {
				checkLength.classList.remove("alert-success");
				checkLength.classList.add("alert-danger");
			}
		}
	}

	render() {
		return (
			<div className="row inputAccountForm">
				<div className="col-md-8 col-md-offset-2">
					<div className="form-group">
						<input type="text" className="form-control" id="accountId" name="accountId" readOnly/>
					</div>

					<div className="form-group">
						<label>URL</label>
						<input type="url" className="form-control" id="siteUrl" name="siteUrl" onChange={(e) => this.handleFormInput(e)}/>
					</div>

					<div className="form-group">
						<label>Username</label>
						<input type="text" className="form-control" id="siteUsername" name="siteUsername" onChange={(e) => this.handleFormInput(e)}/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" id="sitePassword" name="sitePassword" onChange={(e) => this.handleFormInput(e)}/>
					</div>

					<div className="form-group">
						<h4>Password Strength:</h4>
						<br/>

						<div className="alert alert-danger" id="check-uppercase">Password harus memiliki setidaknya satu karakter huruf besar (upper-case).</div>
						<div className="alert alert-danger" id="check-lowercase">Password harus memiliki setidaknya satu karakter huruf kecil (lower-case).</div>
						<div className="alert alert-danger" id="check-special">Password harus memiliki setidaknya satu karakter spesial (#?!@$%^&*-).</div>
						<div className="alert alert-danger" id="check-number">Password harus memiliki setidaknya satu angka.</div>
						<div className="alert alert-danger" id="check-length">Password harus memiliki panjang (length) lebih dari 5 karakter.</div>

					</div>

					<div className="form-group">
						<button className="btn btn-lg btn-success" onClick={() => this.saveAccount()}>Save</button>
					</div>
				</div>
			</div>
		)
	}
}

export default PasswordWidget