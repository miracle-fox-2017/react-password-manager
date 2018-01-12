import React from 'react';

const Validator = props => {
  if(props.classes){
    return (
      <li className="alert alert-success">{props.message}</li>
    )
  }else{
    return (
      <li className="alert alert-danger">{props.message}</li>
    )
  }
}

export default Validator;
