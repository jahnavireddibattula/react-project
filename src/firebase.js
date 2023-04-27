import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBseSwy_nvyR-xZZ6ShrUjFTo2chGPTp1A",
  authDomain: "react-contact-42626.firebaseapp.com",
  projectId: "react-contact-42626",
  storageBucket: "react-contact-42626.appspot.com",
  messagingSenderId: "389855449185",
  appId: "1:389855449185:web:3c3b2e83b1b3422e765a20"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };



