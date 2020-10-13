import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignUpSignIn from './pages/signupsignin/SignUpSignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {auth} from './firebase/firebase.utils'



class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
  return (
    
    <Router>
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignUpSignIn} />
      </Switch>
      
    </div>
    </Router>
  );
    }
}

export default App;
