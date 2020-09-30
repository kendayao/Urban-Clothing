import React from 'react';
import './App.css';
import Homepage from './pages/homepage/HomePage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function HatsPage(){
  return <div>
    <h1>Hats Page</h1>
  </div>
}


function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
