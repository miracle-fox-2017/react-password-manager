import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delete_pm } from '../actions/pm'

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
		      <td> <span onClick={() => this.removePM(this.props.pmList.key)} className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
		    </tr>
		)
	}
}



export default connect (null, null)(PmList)