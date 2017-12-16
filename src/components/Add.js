import React,{Component} from 'react';
import {connect} from 'react-redux';

import {addNewAccount} from '../redux/actions/action-accounts';
import Validator from './Validator';

import './Add.css';

class Add extends Component {
  constructor(){
    super();
    this.state = {
      viewType : 'password',
      inputform : {
        website : 'default',
        username : 'default',
        password : 'default'
      },
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
          inputform : {...this.state.inputform,website:value}
        });
        break;
      case 'username':
        this.setState({
          inputform : {...this.state.inputform,username:value}
        });
        break;
      case 'password':
        this.setState({
          inputform : {...this.state.inputform,password:value}
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
        break;
      default:
        console.log('Wrong type!');
    }
  }
  render(){
    return(
      <div className="form-wrapper">
        <span className="header-title">Add New Account</span>
        <input type="text" placeholder="Website URL" style={{marginBottom:'15px'}} onChange={(e) => this.handleChange('website',e.target.value)}/>
        <input type="text" placeholder="Email or Username" style={{marginBottom:'15px'}} onChange={(e) => this.handleChange('username',e.target.value)}/>
        <div className="input-wrapper" style={{marginBottom:'15px'}}>
          <input type={this.state.viewType} placeholder="Password" onChange={(e) => this.handleChange('password',e.target.value)}/>
          <button onClick={() => this.toggelPasswordView()}></button>
        </div>
        <button className="btn btn-primary" onClick={() => this.props.addNewAccount(this.state.inputform)} disabled={this.state.disallowButton}>Save</button>
        <ul className="validator-wrapper">
          <Validator classes={this.state.passwordValidator[0]} message="Password memiliki minimal satu huruf besar (A-Z)"/>
          <Validator classes={this.state.passwordValidator[1]} message="Password memiliki minimal satu huruf kecil (a-z)</"/>
          <Validator classes={this.state.passwordValidator[2]} message="Password memiliki minimal satu karakter spesial (#$@!&%)"/>
          <Validator classes={this.state.passwordValidator[3]} message="Password memiliki minimal satu angka (0-9)"/>
          <Validator classes={this.state.passwordValidator[4]} message="Password memiliki minimal panjang 5 karakter"/>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewAccount : (account) => dispatch(addNewAccount(account))
  }
}

export default connect(null,mapDispatchToProps)(Add);
