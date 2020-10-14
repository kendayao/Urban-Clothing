import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzJKVFPFGc3ssgP-1au_TFxtuiR0k6rUg",
    authDomain: "urban-clothing-9c16e.firebaseapp.com",
    databaseURL: "https://urban-clothing-9c16e.firebaseio.com",
    projectId: "urban-clothing-9c16e",
    storageBucket: "urban-clothing-9c16e.appspot.com",
    messagingSenderId: "40872759123",
    appId: "1:40872759123:web:71a94cce1784afd5485ba6",
    measurementId: "G-Q8XYC07X78"
  };

  export const createUserProfileDocument= async (userAuth, additionalData)=>{
    // if user auth does not exists. userAuth is null when signed out
    if(!userAuth)return;

    //if user auth does exist; check if data already exist in database
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get();

    //if doesn't exist create data in database
    if(!snapShot.exists){
      const {displayName, email}=userAuth;
      const createdAt=new Date();

    

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
    
    }
    return userRef;
  }

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();


  // google authentication utility setup
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;