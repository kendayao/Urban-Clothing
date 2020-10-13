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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;