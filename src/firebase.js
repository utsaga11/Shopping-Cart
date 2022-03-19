import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRBJHSitYRHQmv0_bkllyXxVFPemMr83Y",
  authDomain: "cart-5792e.firebaseapp.com",
  projectId: "cart-5792e",
  storageBucket: "cart-5792e.appspot.com",
  messagingSenderId: "758951000467",
  appId: "1:758951000467:web:6274edd4ef572e23275066"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();