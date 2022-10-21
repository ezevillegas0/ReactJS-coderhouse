import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1kzI4cy4qIydlpbNnOqcntCX84Wy_WRo",
  authDomain: "coderhouse-react-7f5e6.firebaseapp.com",
  projectId: "coderhouse-react-7f5e6",
  storageBucket: "coderhouse-react-7f5e6.appspot.com",
  messagingSenderId: "1064694125247",
  appId: "1:1064694125247:web:8e21cb7f9eedefd150ec0a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)