import React, { Component } from 'react'
import db from '../db'

class PassWordList extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<input type="text" className="form-control searchPassword" placeholder="Search here..." name="searchAccount" id="searchAccount"/>

					<table className="table table-stripped password-table">
						<thead>
							<tr>
								<td>URL</td>
								<td>Username</td>
								<td>Password</td>
								<td>CreatedAt</td>
								<td>UpdatedAt</td>
								<td>Action</td>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>google.com</td>
								<td>madman</td>
								<td>123233</td>
								<td>22-12-2017</td>
								<td>25-12-2017</td>
								<td>
									<a href="#" className="btn btn-info">Edit</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}

	componentDidMount() {

	}
}

export default PassWordList
