import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDE0TlI6s5x5h41k6Gz3jg3x2bsBPp_goI",
  authDomain: "concise-flame-402923.firebaseapp.com",
  projectId: "concise-flame-402923",
  storageBucket: "concise-flame-402923.appspot.com",
  messagingSenderId: "713290946493",
  appId: "1:713290946493:web:f40f2d137fa1287c4a24d4",
  measurementId: "G-3LJVKLKF5B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
