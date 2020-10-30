import React, { Component } from 'react';
import SignUpComponent from './signUpComponent';
import LogInComponent from './loginComponent';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

 class FrontpageComponent extends Component {
   constructor()
   {
     super();
     this.state = {
      clicked: false
    };

    this.handleClicksign = this.handleClicksign.bind(this);
    this.handleClicklog = this.handleClicklog.bind(this);
   }
  handleClicksign()
  {
    this.props.history.push('/signup');
    this.setState({
      clicked: true
    });

  }
  handleClicklog(){
    this.props.history.push('/login');
    this.setState({
      clicked: true
    });

  }
  
  render() {
    return (
        <div>
          
        <img src="health.png" alt="healthy heart" width="150" height="150"></img>
        <p>Take the first step to live with a sound and peaceful mind</p>
        <p>Sign up today to detect signs of depression and get the help you deserve</p>
        <div className="row">
     <div className="col-sm-12 text-center">
         <button id="btnSearch" className="btn btn-primary btn-md center-block" Style="width: 100px" onClick={this.handleClicksign} >Sign In</button>
         {this.state.clicked ? <SignUpComponent /> : null}
          <button id="btnClear" className="btn btn-danger btn-md center-block" Style="width: 100px"  onClick={this.handleClicklog} >Log In</button>
          {this.state.clicked ? <LogInComponent /> : null}
          </div>
          </div>
         
      </div>
    )
  }
}

export default FrontpageComponent;
