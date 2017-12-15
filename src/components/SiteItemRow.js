import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class SiteItemRow extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
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

					<Link className="btn btn-danger" to={{ pathname: `/delete/${this.props.site.key}` }}>Delete</Link>
				</td>
			</tr>
		)
	}
}