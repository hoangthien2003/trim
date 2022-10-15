// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { GoogleAuthProvider } from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();


const firebaseConfig = {
  apiKey: "AIzaSyAyiZUT6CIlJv0XCGU1CQEMedijm5cd_O0",
  authDomain: "project-management-d1de9.firebaseapp.com",
  projectId: "project-management-d1de9",
  storageBucket: "project-management-d1de9.appspot.com",
  messagingSenderId: "642017113044",
  appId: "1:642017113044:web:1caa8a241fcac48e969c41",
  measurementId: "G-LEP66ZNB4P"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();



export default firebase;
export { auth, providerGoogle };