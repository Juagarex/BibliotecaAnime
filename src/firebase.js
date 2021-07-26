import firebase from "firebase/app";
import 'firebase/firebase-firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyAm5teXjgr4icKIPePrDehNJ15rk6iw1KI",
    authDomain: "crud-firebase-cb9e3.firebaseapp.com",
    projectId: "crud-firebase-cb9e3",
    storageBucket: "crud-firebase-cb9e3.appspot.com",
    messagingSenderId: "449006120800",
    appId: "1:449006120800:web:b01c29d38c286bf4007805"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export  const db = fb.firestore();