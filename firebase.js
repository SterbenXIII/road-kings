// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnEN8jd5Wzfk1WETjnJHhP0YDXavdFlqM",
  authDomain: "road-kings-7dbe2.firebaseapp.com",
  projectId: "road-kings-7dbe2",
  storageBucket: "road-kings-7dbe2.appspot.com",
  messagingSenderId: "26171867559",
  appId: "1:26171867559:web:065401041eb09688487682",
  measurementId: "G-J37KPWYLYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);