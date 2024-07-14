// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPhPfAq48zWlQ3Bhz9ysEiEYw5kcXR4JY",
  authDomain: "netflixgpt-63098.firebaseapp.com",
  projectId: "netflixgpt-63098",
  storageBucket: "netflixgpt-63098.appspot.com",
  messagingSenderId: "489048560768",
  appId: "1:489048560768:web:ab855bd153066de9094265",
  measurementId: "G-118GCQFW3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
