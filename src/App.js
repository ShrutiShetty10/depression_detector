import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import FrontpageComponent from './components/frontpageComponent';
import LogInComponent from './components/loginComponent';
import SignUpComponent from './components/signUpComponent';




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/" exact component={FrontpageComponent}></Route>
        <Route path="/signup" exact component={SignUpComponent}></Route>
        <Route path="/login" exact component={LogInComponent}></Route>
        <FrontpageComponent/>
      </Switch>
        
        
      </header>
     
      </div>
     </Router>
  );
}

export default App;
