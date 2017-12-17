import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import db from '../db'
import { connect } from 'react-redux' 
import { deleteSite, updateSite } from '../actions/siteAction'

class SiteItemRow extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	doDeleteSite(key) {
		alert(`${key} Site Deleted`)

		this.props.removeSite(key)
	}

	render() {
		return (
			<tr>
				<td>{ this.props.site.url }</td>
				<td>{ this.props.site.username }</td>
				<td>{ this.props.site.password }</td>
				<td>{ this.props.site.createdAt }</td>
				<td>{ this.props.site.updatedAt }</td>
				<td>

					<Link className="btn btn-info" to=
						{{
							pathname: `/edit/${this.props.site.key}`,
							state: {
								url: this.props.site.url,
								username: this.props.site.username,
								password: this.props.site.password,
								updatedAt: new Date()
							}
						}}>
						Edit
					</Link>

					<a className="btn btn-danger" onClick={() => this.doDeleteSite(this.props.site.key)}>Delete</a>
				</td>
			</tr>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		sites: state.siteReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeSite: key => dispatch(deleteSite(key)) 
	}
}

export default connect(null, mapDispatchToProps)(SiteItemRow)