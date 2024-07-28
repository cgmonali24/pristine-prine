// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6MiRbgR7ao3vS2cHG6XKjPRK4xuPQA3M",
  authDomain: "pristine-pine.firebaseapp.com",
  databaseURL: "https://pristine-pine-default-rtdb.firebaseio.com",
  projectId: "pristine-pine",
  storageBucket: "pristine-pine.appspot.com",
  messagingSenderId: "733917444106",
  appId: "1:733917444106:web:7e348bb4206845b50787f3",
  measurementId: "G-M87VK239BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};