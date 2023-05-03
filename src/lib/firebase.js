import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: "",

  apiKey: "AIzaSyCP_jI2obUGy1G6FN928QzPj6C5GWPbF3Y",
  authDomain: "zyq-io.firebaseapp.com",
  projectId: "zyq-io",
  storageBucket: "zyq-io.appspot.com",
  messagingSenderId: "504050281226",
  appId: "1:504050281226:web:497d0180f4957a35fba8f3",
  measurementId: "G-4L3MCV8QYQ"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
