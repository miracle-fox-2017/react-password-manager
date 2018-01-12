import React,{Component} from 'react';
import {connect} from 'react-redux';

import {editAccount} from '../redux/actions/action-accounts';
import Validator from './Validator';
import './Modal.css';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewType : 'password',
      editValue : {
        id : null,
        website : '',
        username : '',
        password : ''
      },
      propsPassword : '',
      disallowButton : false,
      passwordValidator : [
        false,
        false,
        false,
        false,
        false
      ]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      editValue : {
        id : nextProps.editValue.id,
        website : nextProps.editValue.website,
        username : nextProps.editValue.username
      },
      propsPassword : nextProps.editValue.password
    });
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
  changeValidatorState(pos,value){
    let tempValidator = this.state.passwordValidator;
    tempValidator.splice(pos,1,value);
    this.setState({
      passwordValidator : tempValidator
    });
  }
  handleChange(type,value){
    switch (type) {
      case 'website':
        this.setState({
          editValue : {...this.state.editValue,website:value}
        });
        break;
      case 'username':
        this.setState({
          editValue : {...this.state.editValue,username:value}
        });
        break;
      case 'password':
        this.setState({
          editValue : {...this.state.editValue,password:value}
        });
        const checkUppercase = /(?=.*[A-Z])/g.test(value);
        const checkLowercase = /(?=.*[a-z])/g.test(value);
        const checkSpecialchar = /(?=.*[#$@!&%])/g.test(value);
        const checkNumeric = /(?=.*\d)/g.test(value);
        const checkLength = /.{5,}/g.test(value);
        checkUppercase ? this.changeValidatorState(0,true) : this.changeValidatorState(0,false);
        checkLowercase ? this.changeValidatorState(1,true) : this.changeValidatorState(1,false);
        checkSpecialchar ? this.changeValidatorState(2,true) : this.changeValidatorState(2,false);
        checkNumeric ? this.changeValidatorState(3,true) : this.changeValidatorState(3,false);
        checkLength ? this.changeValidatorState(4,true) : this.changeValidatorState(4,false);
        if(value !== ''){
          if(this.state.passwordValidator.indexOf(false) === -1){
            this.setState({
              disallowButton : false
            });
          }else{
            this.setState({
              disallowButton : true
            });
          }
        }else{
          this.setState({
            disallowButton : false
          });
        }
        break;
      default:
        console.log('Wrong type!');
    }
  }
  editAccountCheck(value){
    if(value.password === undefined || value.password === ''){
      this.props.editAccount({
        id : this.state.editValue.id,
        website : this.state.editValue.website,
        username : this.state.editValue.username,
        password : this.state.propsPassword
      });
    }else{
      this.props.editAccount(this.state.editValue);
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
              <input type="text"
                placeholder="Website URL"
                style={{marginBottom:'15px'}}
                value={this.state.editValue.website}
                onChange={(e) => this.handleChange('website',e.target.value)}/>
              <input type="text"
                placeholder="Email or Username"
                style={{marginBottom:'15px'}}
                value={this.state.editValue.username}
                onChange={(e) => this.handleChange('username',e.target.value)}/>
              <div className="input-wrapper" style={{marginBottom:'15px'}}>
                <input type={this.state.viewType}
                  placeholder="Password"
                  onChange={(e) => this.handleChange('password',e.target.value)}/>
                <button onClick={() => this.toggelPasswordView()}></button>
              </div>
              <ul className="validator-wrapper">
                <Validator classes={this.state.passwordValidator[0]} message="Password memiliki minimal satu huruf besar (A-Z)"/>
                <Validator classes={this.state.passwordValidator[1]} message="Password memiliki minimal satu huruf kecil (a-z)"/>
                <Validator classes={this.state.passwordValidator[2]} message="Password memiliki minimal satu karakter spesial (#$@!&%)"/>
                <Validator classes={this.state.passwordValidator[3]} message="Password memiliki minimal satu angka (0-9)"/>
                <Validator classes={this.state.passwordValidator[4]} message="Password memiliki minimal panjang 5 karakter"/>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                disabled={this.state.disallowButton}
                onClick={() => this.editAccountCheck(this.state.editValue)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editAccount : (account) => dispatch(editAccount(account))
  }
}

export default connect(null,mapDispatchToProps)(Modal);
