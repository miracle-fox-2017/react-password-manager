import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { update_pm } from '../actions/pm'

const inputStyle = {
	margin: 'auto',
	width: '50%',
	textAlign: 'center',
}

class EditPm extends Component{
	constructor(props) {
		super()
		this.state = {
			pm: props.location.state.pm,
			url: '',
			owner: '',
			username: '',
			password: '',
			checkLC: 'alert alert-dismissible alert-danger',
			checkUC: 'alert alert-dismissible alert-danger',
			checkNum: 'alert alert-dismissible alert-danger',
			checkLength: 'alert alert-dismissible alert-danger',
			checkSpecial: 'alert alert-dismissible alert-danger'			
		}		
	}

	changeHandler(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	passwordHandler(event){
		  // Validate lowercase letters	
		  this.setState({
		  	[event.target.name] : event.target.value
		  })
		  
		  var lowerCaseLetters = /[a-z]/g;
		  if(event.target.value.match(lowerCaseLetters)) {  
		   this.setState({
		   	checkLC: 'alert alert-dismissible alert-success'
		   })
		  } else {
		  	this.setState({
		  	checkLC: 'alert alert-dismissible alert-danger'
		  	})
		  }
		  
		  // Validate capital letters
		  var upperCaseLetters = /[A-Z]/g;
		  if(event.target.value.match(upperCaseLetters)) {  
		   this.setState({
		   	checkUC: 'alert alert-dismissible alert-success'
		   })
		  } else {
		   this.setState({
		   	checkUC: 'alert alert-dismissible alert-danger'
		   })
		  }

		  // Validate numbers
		  var numbers = /[0-9]/g;
		  if(event.target.value.match(numbers)) {  
		   this.setState({
		   	checkNum: 'alert alert-dismissible alert-success'
		   })
		  } else {
		   this.setState({
		   	checkNum: 'alert alert-dismissible alert-danger'
		   })
		  }
		  
		  // Validate length
		  if(event.target.value.length > 5) {
		  	this.setState({
		  		checkLength: 'alert alert-dismissible alert-success'
		  	})	  	
		  } else {
		  	this.setState({
		  		checkLength: 'alert alert-dismissible alert-danger'
		  	})
		  }	

		  // Validate Special Character
		  var special = /[^A-Za-z0-9]/g;
		  if(event.target.value.match(special)) {  
		   this.setState({
		   	checkSpecial: 'alert alert-dismissible alert-success'
		   })
		   
		  } else {
		   this.setState({
		   	checkSpecial: 'alert alert-dismissible alert-danger'
		   })
		  }		 
	}

	updatePM(e) {		
	if( this.state.checkLC      === 'alert alert-dismissible alert-success' &&
		this.state.checkUC      === 'alert alert-dismissible alert-success' &&
		this.state.checkNum     === 'alert alert-dismissible alert-success' &&
		this.state.checkLength  === 'alert alert-dismissible alert-success' &&
		this.state.checkSpecial === 'alert alert-dismissible alert-success'
	  ){
	    const newUpdatePM = {
			url: this.state.url || this.state.pm.url,
			owner: this.state.owner || this.state.pm.owner,
			username: this.state.username || this.state.pm.username,
			password: this.state.password || this.state.pm.password,
			updatedAt: new Date().toISOString()
	    }				    	
			update_pm(newUpdatePM,this.state.pm.key)	
		}else{	
		    const newUpdatePM = {
				url: this.state.url || this.state.pm.url,
				owner: this.state.owner || this.state.pm.owner,
				username: this.state.username || this.state.pm.username,
				password: this.state.pm.password,
				updatedAt: new Date().toISOString()
		    }				    	
				update_pm(newUpdatePM,this.state.pm.key)			
				alert('Password not updated')
		}
	}

	render() {
		return(
			<div>
				<form>
				  <fieldset>
				    <div className="form-group">
				      <label>Url</label>
				      <input style={inputStyle}type="text" name="url" onChange={(e) => this.changeHandler(e)} className="form-control" placeholder={this.state.pm.url} />					     
				    </div>
				    <div className="form-group">
				      <label>Owner</label>
				      <input style={inputStyle} name="owner" onChange={(e) => this.changeHandler(e)} type="text" className="form-control" placeholder={this.state.pm.owner} />					     
				    </div>					    
				    <div className="form-group">
				      <label>Username</label>
				      <input style={inputStyle} name="username" onChange={(e) => this.changeHandler(e)} type="text" className="form-control" placeholder={this.state.pm.username} />					     
				    </div>					    
				    <div className="form-group">
				      <label>Password</label>
				      <input style={inputStyle} name="password" onChange={(e) => this.passwordHandler(e)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Insert new Password" />
				    </div>				    
				  </fieldset>
					<div id="message">
					  <small>Password must contain the following:</small>					  
						<p style={inputStyle} className={this.state.checkLC} >A  <b>lowercase</b> letter</p>
						<p style={inputStyle} className={this.state.checkUC} >A   <b>capital (uppercase)</b> letter</p>
						<p style={inputStyle} className={this.state.checkNum} >A   <b>number</b></p>
						<p style={inputStyle} className={this.state.checkLength} > <b>length</b> > 5 </p>
						<p style={inputStyle} className={this.state.checkSpecial} > Must Have <b>Special Character</b> </p>
					</div>				  
				</form>
				<Link to='/'>
				<button onClick={(e) => this.updatePM(e)}type="button" className="btn btn-primary">Submit</button>
				</Link>				
				<br/>
				<Link to='/'>
				<span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
				</Link>
			</div>
		)
	}
}

export default EditPm