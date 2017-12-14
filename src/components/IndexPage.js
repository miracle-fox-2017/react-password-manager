import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class IndexPage extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
			<div className="wrap">
				<header className="App-header">
					<h1 className="App-title">
						<Link style={{ color: '#fff' }} to='/'>Omni Pass</Link>

						<Link style={{marginLeft: '20px' }} className="btn btn-success" to={{
							pathname: `/add`}}>
							Add Site
						</Link>
					</h1>
				</header>

				<div className="container">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default IndexPage