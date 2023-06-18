
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDOjP-cEIqy2P3DnMukkA5bIjSKNOu774g",
  authDomain: "tiktok-clone---jornada-18273.firebaseapp.com",
  projectId: "tiktok-clone---jornada-18273",
  storageBucket: "tiktok-clone---jornada-18273.appspot.com",
  messagingSenderId: "1025576746304",
  appId: "1:1025576746304:web:96b476ed248427a44f8ea5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;