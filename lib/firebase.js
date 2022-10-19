import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiS12eNsKZwg30xkz49GVECOhhAHJonz8",
  authDomain: "firebasics-29c62.firebaseapp.com",
  projectId: "firebasics-29c62",
  storageBucket: "firebasics-29c62.appspot.com",
  messagingSenderId: "215600281868",
  appId: "1:215600281868:web:a2077ddf8d13e30dad3129",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
