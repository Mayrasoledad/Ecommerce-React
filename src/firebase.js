import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAHjTvZ0EHNXO8ORsA-YAtx3y6jqwtmAGU",
    authDomain: "ecommerce-react-203c9.firebaseapp.com",
    projectId: "ecommerce-react-203c9",
    storageBucket: "ecommerce-react-203c9.appspot.com",
    messagingSenderId: "487982545146",
    appId: "1:487982545146:web:d502f332826e8d6fdbf143"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}