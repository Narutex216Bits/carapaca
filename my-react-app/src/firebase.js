import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRQav4VQ27XwjsNFrW97lk-6JawmmZ2rE",
  authDomain: "carapaca-5afdf.firebaseapp.com",
  projectId: "carapaca-5afdf",
  storageBucket: "carapaca-5afdf.firebasestorage.app",
  messagingSenderId: "809798042814",
  appId: "1:809798042814:web:ec79618079ffeeab944aef",
  measurementId: "G-CNPHQKVRQ1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
