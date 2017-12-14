import React from 'react'

class Form extends React.Component {

render () {
  return (
    <div className="container">
    <form className="form-horizontal">
      <fieldset>
        <h1>Form Redux Password Manager</h1>
        <div className="form-group">
          <label htmlFor="inputURL" className="col-lg-2 control-label">URL</label>
          <div className="col-lg-10">
            <input className="form-control" id="inputURL" placeholder="input URL. . . " type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="Username" className="col-lg-2 control-label">Username</label>
          <div className="col-lg-10">
            <input className="form-control" id="Username" placeholder="username" type="text"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input className="form-control" id="inputPassword" placeholder="Password" type="password"/>
          </div>
        </div>


        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
      </form>
    </div>
  )
}
}

export default Form
