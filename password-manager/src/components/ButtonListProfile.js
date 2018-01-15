import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ButtonListProfile extends Component {
  render() {
    return (
      <div style={{margin: '20px 0px'}} className="text-center">
        <Link to="/list">
          <button type="button" className="btn btn-primary">
            Data List
          </button>
        </Link>
      </div>
    )
  }
}

export default ButtonListProfile
