import React,{useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import userComponent from "./components/userComponent"
import './App.css';

function App() {
  return (
    //const [active,setActive]=useState("SignInButtonClick");
    <div className="App">
      <header className="App-header">
       
       <img src="health.png" alt="healthy heart" width="150" height="150"></img>
       <p>Take the first step to live with a sound and peaceful mind</p>
       <p>Sign up today to detect signs of depression and get the help you deserve</p>
       <div class="row">
    <div class="col-sm-12 text-center">
        <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 100px;"  >Sign In</button>
         <button id="btnClear" class="btn btn-danger btn-md center-block" Style="width: 100px;"  >Log In</button>
     </div>
</div>
       </header>
      
    </div>
  );
}

export default App;
