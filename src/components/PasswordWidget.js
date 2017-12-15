import React, { Component } from 'react'

class PasswordWidget extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	accountId: '',
	  	siteUrl: '',
	  	siteUsername: '',
	  	sitePassword: '',
	  	isUppercaseValid: false,
	  	isLowecaseValid: false,
	  	isNumberValid: false,
	  	isSpecialValid: false,
	  	isLengthValid: false
	  };
	}

	saveAccount(e) {
		e.preventDefault()

		if (this.state.isUppercaseValid && this.state.isLowecaseValid &&
			this.state.isNumberValid && this.state.isSpecialValid && this.state.isLengthValid) {
			alert("Save Account")
	} else {
		alert("Password validation unmet! Please use more secure password!")
	}

	}

	handleFormInput(e) {
		this.setState({
			[e.target.name] : e.target.value
		})

		this.validatePasswordInput(e)
	}

	validatePasswordInput(e) {
		if (e.target.name === 'sitePassword') {
			const password = e.target.value
			const checkUppercase = document.querySelector("#check-uppercase")
			const checkLowercase = document.querySelector("#check-lowercase")
			const checkLength = document.querySelector("#check-length")
			const checkNumber = document.querySelector("#check-number")
			const checkSpecial = document.querySelector("#check-special")

			const lowerCaseRegex = /[a-z]/g;
			const upperCaseRegex = /[A-Z]/g;
			const numberRegex = /[0-9]/g;
			const specialRegex = /[#?!@$%^&*-]/g;

			if(password.match(lowerCaseRegex)) {
				checkLowercase.classList.remove("alert-danger");
				checkLowercase.classList.add("alert-success");
				this.setState({
					isLowecaseValid : true
				})

			} else {
				checkLowercase.classList.remove("alert-success");
				checkLowercase.classList.add("alert-danger");
				this.setState({
					isLowecaseValid : false
				})
			}

			if(password.match(upperCaseRegex)) {
				checkUppercase.classList.remove("alert-danger");
				checkUppercase.classList.add("alert-success");
				this.setState({
					isUppercaseValid : true
				})

			} else {
				checkUppercase.classList.remove("alert-success");
				checkUppercase.classList.add("alert-danger");
				this.setState({
					isUppercaseValid : false
				})
			}

			if(password.match(numberRegex)) {
				checkNumber.classList.remove("alert-danger");
				checkNumber.classList.add("alert-success");
				this.setState({
					isNumberValid : true
				})

			} else {
				checkNumber.classList.remove("alert-success");
				checkNumber.classList.add("alert-danger");
				this.setState({
					isNumberValid : false
				})
			}

			if(password.match(specialRegex)) {
				checkSpecial.classList.remove("alert-danger");
				checkSpecial.classList.add("alert-success");
				this.setState({
					isSpecialValid : true
				})

			} else {
				checkSpecial.classList.remove("alert-success");
				checkSpecial.classList.add("alert-danger");
				this.setState({
					isSpecialValid : false
				})
			}

			if (password.length > 5) {
				checkLength.classList.add("alert-success");
				checkLength.classList.remove("alert-danger");
				this.setState({
					isLengthValid : true
				})

			} else {
				checkLength.classList.remove("alert-success");
				checkLength.classList.add("alert-danger");
				this.setState({
					isLengthValid : false
				})
			}
		}
	}

	render() {
		return (
			<div className="row inputAccountForm">
				<div className="col-md-8 col-md-offset-2">
					<form action="#" id="newAccountForm">
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
							<button className="btn btn-lg btn-success" onClick={(e) => this.saveAccount(e)}>Save</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default PasswordWidget