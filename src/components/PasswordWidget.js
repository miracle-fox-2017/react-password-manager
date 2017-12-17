import React, { Component } from 'react'
import db from '../db'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addSite, updateSite } from '../actions/siteAction';
import { isNullOrUndefined } from '../helpers/helper'

class PasswordWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			siteId: isNullOrUndefined(props.match) ? '' : props.match.params.siteId,
			siteUrl: isNullOrUndefined(props.location) ? '' : props.location.state.url,
			siteUsername: isNullOrUndefined(props.location) ? '' : props.location.state.username,
			sitePassword: isNullOrUndefined(props.location) ? '' : props.location.state.password,
			isUppercaseValid: false,
			isLowecaseValid: false,
			isNumberValid: false,
			isSpecialValid: false,
			isLengthValid: false,
			doneUpsert: false
		};
	}
	
		saveSite(e) {
			e.preventDefault()
		
			if (this.state.isUppercaseValid && this.state.isLowecaseValid && this.state.isNumberValid && this.state.isSpecialValid && this.state.isLengthValid) {
				
				let siteData = {
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					owner: 'USER',
					url: this.state.siteUrl,
					username: this.state.siteUsername,
					password: this.state.sitePassword
				}
				
				
				if (this.state.siteId === '') {
					this.props.newSite(siteData)
					
				} else {
					let site = {
						updatedAt: new Date().toISOString(),
						owner: 'USER',
						url: this.state.siteUrl,
						username: this.state.siteUsername,
						password: this.state.sitePassword
					}

					this.props.editSite(this.state.siteId, site)
				}
				
				this.resetForm()

				this.setState({
					doneUpsert : true
				})
				
				// alert('Site saved')
			} else {
				alert('Password validation failed! Please use more secure password!')
			}
		}
		
		resetForm() {
			this.setState({
				siteId: '',
				siteUrl: '',
				siteUsername: '',
				sitePassword: '',
			})
			
			document.querySelector('#newSiteForm').reset()
		}
		
		handleFormInput(e) {
			this.setState({
				[e.target.name] : e.target.value
			})
			
			if (e.target.name === 'sitePassword') {
				this.validatePasswordInput(e.target.value)
			}
		}
		
		validatePasswordInput(password) {
			const lowerCaseRegex = /[a-z]/g;
			const upperCaseRegex = /[A-Z]/g;
			const numberRegex = /[0-9]/g;
			const specialRegex = /[#?!@$%^&*-]/g;
			
			if (password.match(lowerCaseRegex)) {
				this.setState({
					isLowecaseValid: true
				})
				
			} else {
				this.setState({
					isLowecaseValid: false
				})
			}
			
			if (password.match(upperCaseRegex)) {
				this.setState({
					isUppercaseValid: true
				})
				
			} else {
				this.setState({
					isUppercaseValid: false
				})
			}
			
			if (password.match(numberRegex)) {
				this.setState({
					isNumberValid: true
				})
				
			} else {
				this.setState({
					isNumberValid: false
				})
			}
			
			if (password.match(specialRegex)) {
				this.setState({
					isSpecialValid: true
				})
				
			} else {
				this.setState({
					isSpecialValid: false
				})
			}
			
			if (password.length > 5) {
				this.setState({
					isLengthValid: true
				})
				
			} else {
				this.setState({
					isLengthValid: false
				})
			}
		}
		
		render() {
			return (
				<div className="row inputSiteForm">
				<div className="col-md-8 col-md-offset-2">
				<form action="#" id="newSiteForm">
				<div className="form-group">
				<input value={this.state.siteId} type="text" className="form-control" id="siteId" name="siteId" readOnly/>
				</div>
				
				<div className="form-group">
				<label>URL</label>
				<input type="url" value={this.state.siteUrl} className="form-control" id="siteUrl" name="siteUrl" onChange={(e) => this.handleFormInput(e)}/>
				</div>
				
				<div className="form-group">
				<label>Username</label>
				<input value={this.state.siteUsername} type="text" className="form-control" id="siteUsername" name="siteUsername" onChange={(e) => this.handleFormInput(e)}/>
				</div>
				
				<div className="form-group">
				<label>Password</label>
				<input value={this.state.sitePassword} type="text" className="form-control" id="sitePassword" name="sitePassword" onChange={(e) => this.handleFormInput(e)}/>
				</div>
				
				<div className="form-group">
				<h4>Password Strength:</h4>
				<br/>
				
				<div className={this.state.isUppercaseValid ? 'alert alert-success' : 'alert alert-danger'} id="check-uppercase">Password harus memiliki setidaknya satu karakter huruf besar (upper-case).</div>
				<div className={this.state.isLowecaseValid ? 'alert alert-success' : 'alert alert-danger'} id="check-lowercase">Password harus memiliki setidaknya satu karakter huruf kecil (lower-case).</div>
				<div className={this.state.isSpecialValid ? 'alert alert-success' : 'alert alert-danger'}id="check-special">Password harus memiliki setidaknya satu karakter spesial (#?!@$%^&*-).</div>
				<div className={this.state.isNumberValid ? 'alert alert-success' : 'alert alert-danger'}id="check-number">Password harus memiliki setidaknya satu angka.</div>
				<div className={this.state.isLengthValid ? 'alert alert-success' : 'alert alert-danger'}id="check-length">Password harus memiliki panjang (length) lebih dari 5 karakter.</div>
				
				</div>
				
				<div className="form-group">
				<button className="btn u-full-width btn-info" onClick={(e) => this.saveSite(e)}>Save</button>
				</div>
				
				{this.state.doneUpsert && (
					<Redirect to={'/'} />
				)}
				</form>
				</div>
				</div>
			)
		}
		
		componentWillMount() {
			this.validatePasswordInput(this.state.sitePassword)
		}
	}
	
	export default connect(
		null,
		(dispatch) => {
			return {
				editSite: (key, site) => dispatch(updateSite(key, site)),
				newSite: (site) => {
					dispatch(addSite(site))
				}
			}
		}
	)(PasswordWidget)
	
	
	// export default PasswordWidget