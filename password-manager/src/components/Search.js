import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../App.css';

class Search extends Component {
  render() {
    return (
      <div className="text-center">
        <form>
          <div className="form-inline">
            <input type="text" className="form-control" placeholder="Search..." />
            <Link to="/search">
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
