import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  // Your Firebase project configuration details from the console
  apiKey: 'AIzaSyC4h3P7r3U_HBVfRtugjx0rUNDADiPIq78',
  authDomain: 'travelease-04.firebaseapp.com',
  projectId: 'travelease-04',
  storageBucket: 'travelease-04.appspot.com',
  messagingSenderId: '1032745855271',
  appId: '1:1032745855271:web:bda81c7a12f61b3fa52102'
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth();

export { app, database, auth};