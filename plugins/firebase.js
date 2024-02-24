import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: "AIzaSyBN7aKVQsziEfMs5Pl_hv3xzpj3GQs7kYU",
  authDomain: "test-c57b9.firebaseapp.com",
  projectId: "test-c57b9",
  storageBucket: "test-c57b9.appspot.com",
  messagingSenderId: "338490503049",
  appId: "1:338490503049:web:51e9b879f157ac6dbfbb58",
  measurementId: "G-G9Z8M9X1DR"
  });
}

export default firebase;