// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFEri2gag_aRGDfaZCC4LttKb1kVcnAVw',
  authDomain: 'sji-test-c6e78.firebaseapp.com',
  projectId: 'sji-test-c6e78',
  storageBucket: 'sji-test-c6e78.appspot.com',
  messagingSenderId: '774788175971',
  appId: '1:774788175971:web:fd2078ce8d71d6bbac4056',
  measurementId: 'G-MLKRSHF245',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
