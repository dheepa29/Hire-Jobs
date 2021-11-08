import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1zobQ4F80-lGY5a_8VWnUW5JYlv1QZq8",
    authDomain: "miniproject-1d8ce.firebaseapp.com",
    projectId: "miniproject-1d8ce",
    storageBucket: "miniproject-1d8ce.appspot.com",
    messagingSenderId: "305066681226",
    appId: "1:305066681226:web:f4a6a2a6c389307dfa1e73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage,db};
  export default db;