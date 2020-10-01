import React from 'react';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignUpSignIn from './pages/signupsignin/SignUpSignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function App() {
  return (
    
    <Router>
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignUpSignIn} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
