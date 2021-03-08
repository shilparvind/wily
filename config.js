import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBFfbWcrzn5XfvrGLRAUSBxyQRMsQLHTNU",
  authDomain: "wily-53ca1.firebaseapp.com",
  projectId: "wily-53ca1",
  storageBucket: "wily-53ca1.appspot.com",
  messagingSenderId: "517098054356",
  appId: "1:517098054356:web:618f03cd7c9ecd28955141",
  databaseURL: "https://wily-53ca1.firebaseio.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
