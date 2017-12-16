import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPmFromFirebase } from '../actions/pm'
import { add_pm } from '../actions/pm'
import PmList from './PmList'
import { search_pm } from '../actions/pm'

class Home extends Component {
	constructor() {
		super() 
		this.state = {
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

	filterList(event) {
		this.props.search_pm(event.target.value)
	}

	changeHandler(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	clearState() {
		this.setState({
			url: '',
			owner: '',
			username: '',
			password: ''
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

	savePM(e) {		
	e.preventDefault()
	if( this.state.checkLC      === 'alert alert-dismissible alert-success' &&
		this.state.checkUC      === 'alert alert-dismissible alert-success' &&
		this.state.checkNum     === 'alert alert-dismissible alert-success' &&
		this.state.checkLength  === 'alert alert-dismissible alert-success' &&
		this.state.checkSpecial === 'alert alert-dismissible alert-success'
	  ){
	    const newPM = {
			url: this.state.url,
			owner: this.state.owner,
			username: this.state.username,
			password: this.state.password,
			createdAt: new Date().toISOString(),
			updatedAt: null
	    }				    	
			add_pm(newPM)	
			this.clearState()
		}else{
			alert('Please follow Password Rule')
		}
	}
	render() {
		return (
			<div className="home">
			<button className="btn btn-info btn-md" data-toggle="modal" data-target="#addPassword">Add Password</button>
			<input type="text" className="form-control form-control-lg" placeholder="Search" onChange={(e) => this.filterList(e)}/>
			  <table className="table table-hover">
			  <thead>
			    <tr>
			      <td className="table-info" >Url</td>
			      <td className="table-info" >owner</td>
			      <td className="table-info" >username</td>
			      <td className="table-info" >password</td>
			      <td className="table-info" > Edit </td>
			      <td className="table-info" > Delete </td> 
			    </tr>
			   </thead> 
			    <tbody>
					{this.props.pms.map((pm,index) => {
						return(
							<PmList key={index} pmList={pm}  />
						)
					})}
				</tbody>	 	
			  </table>	
				<div className="modal" id="addPassword">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Password Management</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				     

					<form>
					  <fieldset>
					    <div className="form-group">
					      <label>Url</label>
					      <input type="text" name="url" onChange={(e) => this.changeHandler(e)} className="form-control" placeholder="Url" />					     
					    </div>
					    <div className="form-group">
					      <label>Owner</label>
					      <input name="owner" onChange={(e) => this.changeHandler(e)} type="text" className="form-control" placeholder="Owner" />					     
					    </div>					    
					    <div className="form-group">
					      <label>Username</label>
					      <input name="username" onChange={(e) => this.changeHandler(e)} type="text" className="form-control" placeholder="Username" />					     
					    </div>					    
					    <div className="form-group">
					      <label>Password</label>
					      <input name="password" onChange={(e) => this.passwordHandler(e)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					    </div>				    
					  </fieldset>
					</form>
					<div id="message">
					  <small>Password must contain the following:</small>					  
						<p className={this.state.checkLC} >A  <b>lowercase</b> letter</p>
						<p className={this.state.checkUC} >A   <b>capital (uppercase)</b> letter</p>
						<p className={this.state.checkNum} >A   <b>number</b></p>
						<p className={this.state.checkLength} > <b>length</b> > 5 </p>
						<p className={this.state.checkSpecial} > Must Have <b>Special Character</b> </p>
					</div>

				      </div>
				      <div className="modal-footer">
				        <button onClick={(e) => this.savePM(e)}type="button" data-dismiss='modal' className="btn btn-primary">Submit</button>
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>			
			</div>
		)
	}

	componentDidMount() {	
		this.props.getPmFromFirebase()	
	}
}

function mapStateToProps(state) {
	return {
		pms: state.pmReducer.pms
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPmFromFirebase: () => dispatch(getPmFromFirebase()),
		search_pm: (searchPM) => dispatch(search_pm(searchPM))
	}
}

export default connect (mapStateToProps,mapDispatchToProps) (Home)