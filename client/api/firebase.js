import firebase from "firebase/app";
import { FIREBASE_API_KEY, FIREBASE_PROJECT_ID, 
         FIREBASE_MESSAGE_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from "@env"

// firebase services
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: `G-${FIREBASE_MEASUREMENT_ID}`
};
console.log('FIREBASE_API_KEY');
firebase.initializeApp(firebaseConfig);

export default firebase