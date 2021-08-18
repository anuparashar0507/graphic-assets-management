import firebase from 'firebase/app'  

import 'firebase/storage'
import "firebase/firestore";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = ({
    apiKey: "AIzaSyA3_sIDrfQLz28E1WDfRpMQCf1y2KOiOBo",
    authDomain: "ewar-assests.firebaseapp.com",
    projectId: "ewar-assests",
    storageBucket: "ewar-assests.appspot.com",
    messagingSenderId: "409193500708",
    appId: "1:409193500708:web:f4e5749e8195bfd2da48b1",
    measurementId: "G-NYCTLBDRZY"
  });   

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storageRef = firebase.storage();

export default firebase;