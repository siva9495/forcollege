import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase } from 'firebase/database'
import 'firebase/compat/storage';
import 'firebase/storage'
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCExL6wPEeGLgjW3eqiAahCTQDHUf9Kw-Y",
    authDomain: "college-careers-69ee6.firebaseapp.com",
    projectId: "college-careers-69ee6",
    storageBucket: "college-careers-69ee6.firebasestorage.app",
    messagingSenderId: "79877585419",
    appId: "1:79877585419:web:ad5875f80686b9ed7ba50e",
    measurementId: "G-ED8J80XCXK"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
  const analytics = firebase.analytics();
 const db = getDatabase();
 export { db, analytics }

 export default firebase;