import Rebase from "re-base";
// react firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdzNdJ1-sXv4zWVotTDsugGL5mV4N83dY",
  authDomain: "catch-of-your-day.firebaseapp.com",
  databaseURL: "https://catch-of-your-day.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

export default base;
