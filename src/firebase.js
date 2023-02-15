// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6_1bjqdfwLsI_al6Zd267RcGlknvuSg4",
    authDomain: "clone-30b78.firebaseapp.com",
    projectId: "clone-30b78",
    storageBucket: "clone-30b78.appspot.com",
    messagingSenderId: "379584378798",
    appId: "1:379584378798:web:d001c29d48e85c0706fa3f",
    measurementId: "G-001NP9ZYBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };