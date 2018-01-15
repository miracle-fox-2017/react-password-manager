import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import { getDataKeyword } from '../actions/profileAction'

class Search extends Component {

  constructor() {
    super()
    this.state = {
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      keyword: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getKeyword(this.state.keyword)
    this.setState({
      keyword: ''
    })
  }


  render() {
    return (
      <div className="text-center">
        <form>
          <div className="form-inline">
            <input type="text" className="form-control" placeholder="Search by username" value={this.state.keyword} onChange={this.handleChange} />
            <button type="button" className="btn btn-default" onClick={this.handleSubmit}>
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => dispatch(getDataKeyword(keyword))
  }
}

export default connect(null, mapDispatchToProps)(Search)
