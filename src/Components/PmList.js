import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delete_pm } from '../actions/pm'
import { Link } from 'react-router-dom'

class PmList extends Component{
	removePM(key) {
		delete_pm(key)
	}
	render() {
		return (
		    <tr>
		      <td>{ this.props.pmList.url }</td>
		      <td>{ this.props.pmList.owner }</td>
		      <td>{ this.props.pmList.username }</td>
		      <td>{ this.props.pmList.password }</td>
		      <td>{ this.props.pmList.createdAt }</td>
		      <td>{ this.props.pmList.updatedAt }</td>
		      <td> <Link to={{
		      	pathname: `/pm/${this.props.pmList.key}`,
		      	state: {
		      		pm: {
				      url: this.props.pmList.url,
				      owner: this.props.pmList.owner,
				      username: this.props.pmList.username,
				      password: this.props.pmList.password,
				      key: this.props.pmList.key		      			
		      		}
		      	}
		      }}>
		      <span className="glyphicon glyphicon-edit" aria-hidden="true"></span> 
		      </Link> </td>
		      <td> <span onClick={() => this.removePM(this.props.pmList.key)} className="glyphicon glyphicon-remove" aria-hidden="true"></span> </td>
		    </tr>
		)
	}
}



export default connect (null, null)(PmList)