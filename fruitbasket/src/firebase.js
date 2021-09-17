// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDvmBmrHy_llESVlZFpmsDh3iQHxAkGk",
  authDomain: "fruitbasket-7940e.firebaseapp.com",
  databaseURL: "https://fruitbasket-7940e-default-rtdb.firebaseio.com",
  projectId: "fruitbasket-7940e",
  storageBucket: "fruitbasket-7940e.appspot.com",
  messagingSenderId: "562228230145",
  appId: "1:562228230145:web:81c8e6398c9a2f30f52800"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();