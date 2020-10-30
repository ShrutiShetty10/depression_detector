import axios from 'axios';
import React,{Component} from 'react';

import UserService from '../services/UserService';




export default class SignUpComponent extends Component {
   constructor(props){
     super(props);

     this.state={
       firstName:'',
       lastName:'',
       emailId:'',
       password:'',
       
        //user=[firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId,password:this.state.password]
     };
     //let user={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId,password:this.state.password};
     this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
     this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
     this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
     this.changePasswordHandler=this.changePasswordHandler.bind(this);
     this.saveUser=this.saveUser.bind(this);
   }
   
   
   changeFirstNameHandler=(event)=>{
      this.setState({firstName:event.target.value});
   }
   changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value});
 }
 changeEmailIdHandler=(event)=>{
  this.setState({emailId:event.target.value});
  }
  changePasswordHandler=(event)=>{
    this.setState({password:event.target.value});
    
 }
 saveUser=(e)=>{
   e.preventDefault();
   //let user={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId,password:this.state.password};
   
}
  
 
   render() {
    return (
      
        
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 >Sign Up</h1>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input placeholder="First Name" name="firstname" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input placeholder="Last Name" name="lastname" className="form-control" value={this.state.lastName}  onChange={this.changeLastNameHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Email Id</label>
                    <input placeholder="Email id" name="emailid" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                  </div>
                  <button type="button" className="btn btn-success" onClick={this.saveUser}>Register</button>
                </form>
              </div>
              </div>
            </div>
          </div>
      
    );
  }
   }
