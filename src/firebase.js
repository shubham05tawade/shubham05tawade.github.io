import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCubjkkWgZbOiKHWfSkv6KIr-iJecFLyNM",
    authDomain: "fir-ab762.firebaseapp.com",
    databaseURL: "https://fir-ab762.firebaseio.com",
    projectId: "fir-ab762",
    storageBucket: "fir-ab762.appspot.com",
    messagingSenderId: "222680644388",
    appId: "1:222680644388:web:845e4262c4c71eb28651b1",
    measurementId: "G-RE9XC05B94"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export {db, auth, firebaseApp};