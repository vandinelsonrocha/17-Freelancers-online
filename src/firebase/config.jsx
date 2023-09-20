import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHV4S8HSRrxADhVfNLNYKq3dXU4ex1MGs",
  authDomain: "freelancers-22a5e.firebaseapp.com",
  projectId: "freelancers-22a5e",
  storageBucket: "freelancers-22a5e.appspot.com",
  messagingSenderId: "713202498328",
  appId: "1:713202498328:web:79eb7755bf1166b476fc6d"
};

//Inicializar o Firebase
const app = initializeApp(firebaseConfig);

//Inicializar o banco de dados da Firestore onde se guarda os dados
const db = getFirestore(app);

export { db };