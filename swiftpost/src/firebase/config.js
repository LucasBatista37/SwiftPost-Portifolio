import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-oaLxjnC04QS0BlbyxrpdJHyLfiiMnaE",
  authDomain: "abstract-key-405319.firebaseapp.com",
  projectId: "abstract-key-405319",
  storageBucket: "abstract-key-405319.appspot.com",
  messagingSenderId: "475359830532",
  appId: "1:475359830532:web:3b9b0e40793d99b82b4b51",
  measurementId: "G-8LEWTQMQEF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
