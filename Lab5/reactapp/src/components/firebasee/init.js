// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmu_3HkkBTn27P-nxRCRbnAQzdE6pjwQ",
  authDomain: "piwolab-ebd3b.firebaseapp.com",
  projectId: "piwolab-ebd3b",
  storageBucket: "piwolab-ebd3b.appspot.com",
  messagingSenderId: "1035141037104",
  appId: "1:1035141037104:web:effe6f866000ee4f6c81f5",
  measurementId: "G-JQW6BVSYW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);