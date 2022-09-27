// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLuT2eoGgdBFle64vt_VVuJE1Xbw7vXRo',
  authDomain: 'm-wallet-syket.firebaseapp.com',
  projectId: 'm-wallet-syket',
  storageBucket: 'm-wallet-syket.appspot.com',
  messagingSenderId: '476463837377',
  appId: '1:476463837377:web:5a78c5f50546ef08296440',
  measurementId: 'G-MY03482VKT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
