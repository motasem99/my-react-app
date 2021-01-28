import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBhYGcWCk-QcJCOjnZB_TzFa-zBKcyxlEU",
    authDomain: "my-rev-react.firebaseapp.com",
    databaseURL: "https://my-rev-react-default-rtdb.firebaseio.com",
    projectId: "my-rev-react",
    storageBucket: "my-rev-react.appspot.com",
    messagingSenderId: "1032046805107",
    appId: "1:1032046805107:web:8692c324abee493267ea06",
    measurementId: "G-TJYF07W2K9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase