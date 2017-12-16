import React,{Component} from 'react';

import './Modal.css';

export default class Modal extends Component {
  constructor(){
    super();
    this.state = {
      viewType : 'password'
    }
  }
  toggelPasswordView(){
    if (this.state.viewType === 'password') {
      this.setState({
        viewType : 'text'
      });
    } else {
      this.setState({
        viewType : 'password'
      });
    }
  }
  render(){
    return(
      <div id="edit-account" className="modal fade modal-wrapper" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Edit {this.props.editValue.website}</h4>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Website URL" style={{marginBottom:'15px'}} onChange={(e) => this.handleChange('website',e.target.value)}/>
              <input type="text" placeholder="Email or Username" style={{marginBottom:'15px'}} onChange={(e) => this.handleChange('username',e.target.value)}/>
              <div className="input-wrapper" style={{marginBottom:'15px'}}>
                <input type={this.state.viewType} placeholder="Password" onChange={(e) => this.handleChange('password',e.target.value)}/>
                <button onClick={() => this.toggelPasswordView()}></button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
