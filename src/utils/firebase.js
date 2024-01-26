// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ1vnF5sp17NRG7mkJaUP7DzM2FO14wX8",
  authDomain: "netgpt-20845.firebaseapp.com",
  projectId: "netgpt-20845",
  storageBucket: "netgpt-20845.appspot.com",
  messagingSenderId: "1060998926767",
  appId: "1:1060998926767:web:2018ceac157809edd89f5a",
  measurementId: "G-HGDPPPTFB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);