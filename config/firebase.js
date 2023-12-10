import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBsa484yM2K5L2uBH4CeX63r02FXYHoek",
    authDomain: "final-hackathon-27c8a.firebaseapp.com",
    projectId: "final-hackathon-27c8a",
    storageBucket: "final-hackathon-27c8a.appspot.com",
    messagingSenderId: "563905228550",
    appId: "1:563905228550:web:cdb75357f08e31fbbb7887"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);