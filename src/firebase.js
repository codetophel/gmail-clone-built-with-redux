import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsPqV_iFV_ySlO4nwLqn7oTCPdm40qI78',
  authDomain: 'clone-c7d47.firebaseapp.com',
  projectId: 'clone-c7d47',
  storageBucket: 'clone-c7d47.appspot.com',
  messagingSenderId: '941857341783',
  appId: '1:941857341783:web:1c8834d12745ca7a3abe12',
  measurementId: 'G-MGSSJGXF5L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, provider };
