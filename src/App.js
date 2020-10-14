import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignUpSignIn from './pages/signupsignin/SignUpSignIn'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'



class App extends Component {


  unsubscribeFromAuth=null;

  componentDidMount(){

    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        // listen to any changes in userRef
        userRef.onSnapshot(snapShot=>{
          
          setCurrentUser({
           
              id: snapShot.id,
              ...snapShot.data()
           
          }, ()=>console.log(this.state))
        })

        
      }else{
        setCurrentUser(userAuth)
      }
      
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
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
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
