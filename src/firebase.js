import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { applyActionCode } from 'firebase/auth/cordova';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC4h3P7r3U_HBVfRtugjx0rUNDADiPIq78",
  authDomain: "travelease-04.firebaseapp.com",
  projectId: "travelease-04",
  storageBucket: "travelease-04.appspot.com",
  messagingSenderId: "1032745855271",
  appId: "1:1032745855271:web:bda81c7a12f61b3fa52102",
  measurementId: "G-RJM30Z674Q"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

// export { app, database, auth};