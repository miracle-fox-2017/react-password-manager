import React, { Component } from 'react';
import { connect } from 'react-redux'


class EditData extends Component {

  render() {
    return (
      <div className="text-center">
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <form className="inputForm">
                  <div className="form-group">
                    URL:
                    <input type="text" className="form-control" placeholder="Enter URL" name="url" value={this.props.profile.url} />
                  </div>
                  <div className="form-group">
                    Username:
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" value={this.props.profile.username} />
                  </div>
                  <div className="form-group">
                    Password:
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.props.profile.password} />
                  </div>
                  <button type="submit" className="btn btn-default">Save</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditData)

