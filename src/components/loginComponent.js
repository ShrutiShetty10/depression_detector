import React, { Component } from 'react';
import UserService from '../services/UserService';


export default class LogInComponent extends Component {
    constructor(props){
        super(props);
   
        this.state={ 
          emailId:'',
          password:'',
          
        };
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
     this.changePasswordHandler=this.changePasswordHandler.bind(this);
     this.saveUser=this.saveUser.bind(this);
    }
    
    changeEmailIdHandler=(event)=>{
        this.setState({emailId:event.target.value});
        }
        changePasswordHandler=(event)=>{
          this.setState({password:event.target.value});
        }      
    saveUser=(e)=>{
        e.preventDefault();
        //let user={emailId:this.state.emailId,password:this.state.password};
        
      }
      

  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1 >Log In</h1>
          <div class="card-body">
            <form>
               <div className="form-group">
                 <label>Email Id</label>
                 <input placeholder="Email id" name="emailid" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
              </div>
              <div className="form-group">
                 <label>Password</label>
                 <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
              </div>
              <button type="button" className="btn btn-success" onClick={this.saveUser}>Log In</button>
            </form>
          </div>
          </div>
        </div>
      </div>
  
    );
  }
}
