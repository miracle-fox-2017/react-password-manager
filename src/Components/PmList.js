import React, { Component } from 'react'

class PmList extends Component{
	render() {
		return (
		    <tr>
		      <td>{ this.props.pmList.url }</td>
		      <td>{ this.props.pmList.owner }</td>
		      <td>{ this.props.pmList.username }</td>
		      <td>{ this.props.pmList.password }</td>
		    </tr>
		)
	}
}

export default PmList