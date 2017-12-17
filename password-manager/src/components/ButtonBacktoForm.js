import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ButtonBackToForm extends Component {
  render() {
    return (
      <div style={{ margin: '20px 0px' }} className="text-center">
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Back to Home
          </button>
        </Link>
      </div>
    )
  }
}

export default ButtonBackToForm
