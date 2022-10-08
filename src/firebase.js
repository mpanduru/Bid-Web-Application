import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF6zmog9KTzExcxULPSRf1Kdk7FIyOWd8",
  authDomain: "bid-app-9eac6.firebaseapp.com",
  databaseURL: "https://bid-app-9eac6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bid-app-9eac6",
  storageBucket: "bid-app-9eac6.appspot.com",
  messagingSenderId: "834272789125",
  appId: "1:834272789125:web:cab2fc0d393241d679dfec",
  measurementId: "G-6NHN48D8NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);