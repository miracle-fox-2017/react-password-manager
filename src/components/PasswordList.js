import React, { Component } from 'react'
import db from '../db'
import { snapshotToArray, searchSite } from '../helpers/helper'
import SiteItemRow from './SiteItemRow'
import { connect } from 'react-redux'
import { fetchSites, searchSiteStore } from '../actions/siteAction'

class PassWordList extends Component {
	constructor(props) {
		super(props);
		
	  this.state = {
			sites: [],
			initSites: []
	  };
	}

	doSearchSites(e) {
		const query = e.target.value;
		const newSite = searchSite(this.state.sites, query)
		const initSites = this.state.initSites

		if (query.length >= 1) {
			this.setState({
				sites: newSite
			})
		} else {
			this.setState({
				sites: initSites
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			sites: nextProps.sites,
			initSites: nextProps.sites
		})
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<input type="text" onKeyUp={(e) => this.doSearchSites(e)} className="form-control searchPassword" placeholder="Search here..." name="searchAccount" id="searchAccount"/>
					
					<table className="table table-stripped table-bordered password-table">
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
								this.state.sites.map((site, index) => {
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

	componentDidMount() {
		this.props.loadSiteAccounts()
	}
}

const mapStatetoProps = (state) => {
	return {
		sites: state.siteReducer,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		loadSiteAccounts : () => dispatch(fetchSites())
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PassWordList)
