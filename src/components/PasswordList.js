import React, { Component } from 'react'
import db from '../db'
import { snapshotToArray } from '../helpers/helper'
import SiteItemRow from './SiteItemRow'
import { connect } from 'react-redux'
import {fetchSites } from '../actions/siteAction'

class PassWordList extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	sites: []
	  };
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
							{
								Array.from(this.props.sites).map((site, index) => {
									return (
										<SiteItemRow key={index} site={site}/>
									)
								})
							}
						</tbody>

					</table>
				</div>
			</div>
		)
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps--------', nextProps)
		/*this.setState({
			sites : nextProps.sites
		})*/
	}

	componentDidMount() {
		/*db.ref('/vaults').on('value', (snapshot) => {
			this.setState({
				sites: snapshotToArray(snapshot)
			})
		})*/
		this.props.loadSiteAccounts()
	}
}

const mapStatetoProps = (state) => {
	console.log('mapStatetoProps----', state.siteReducer)
	return {
		sites: state.siteReducer
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		loadSiteAccounts : () => dispatch(fetchSites())
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PassWordList)
