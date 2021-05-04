import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC4pEjb0M-gHZeHecyaSF9rgHr7jqaupP0",
  authDomain: "cowin-24907.firebaseapp.com",
  projectId: "cowin-24907",
  storageBucket: "cowin-24907.appspot.com",
  messagingSenderId: "1093599198996",
  appId: "1:1093599198996:web:2709111d2daf07ad33cc01"
};

firebase.initializeApp(config);

export default firebase.firestore();
