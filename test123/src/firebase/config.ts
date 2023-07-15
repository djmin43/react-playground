import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaWSJU-DRT-mq9EVW6xeS9puWBgZcURk4",
  authDomain: "test123-32ade.firebaseapp.com",
  projectId: "test123-32ade",
  storageBucket: "test123-32ade.appspot.com",
  messagingSenderId: "246089681773",
  appId: "1:246089681773:web:429905faead3926a242864",
  measurementId: "G-R50KQ4LD99",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
