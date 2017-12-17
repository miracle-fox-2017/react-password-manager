import React from 'react'
class EditModal = (props) => {
  console.log('modal', props)
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <fieldset>
                <div className="form-group">
                  <label>URL</label>
                  <input type="text" className="form-control" name="url" />
                </div>
                <div className="form-group">
                  <label>Uername</label>
                  <input type="text" className="form-control" name="username" placeholder="username..." />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" placeholder="****" />
                </div>
                <button className="ui button" type="submit">Save</button>
              </fieldset>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}