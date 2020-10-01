import React from 'react';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
