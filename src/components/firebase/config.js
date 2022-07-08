import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_HkkwE5gSZz-V78oIfzthKLgIT_t5X7g",
    authDomain: "react-ecommerce-be808.firebaseapp.com",
    projectId: "react-ecommerce-be808",
    storageBucket: "react-ecommerce-be808.appspot.com",
    messagingSenderId: "1061582550182",
    appId: "1:1061582550182:web:55e93f466eca4085693067"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, db,provider };