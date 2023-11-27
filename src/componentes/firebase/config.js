import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAd4JSf_rwLi9R69Bhvdf4tCR4dcIhpmOw",
  authDomain: "piana-ecommer.firebaseapp.com",
  projectId: "piana-ecommer",
  storageBucket: "piana-ecommer.appspot.com",
  messagingSenderId: "954792241676",
  appId: "1:954792241676:web:4291bf4f9fb9fa4c8b5c29"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app); 