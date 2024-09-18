import { getStorage } from "@firebase/storage";
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FB_API_KEY,
	authDomain: process.env.FB_AUTH_DOMAIN,
	projectId: process.env.FB_PROJECT_ID,
	storageBucket: process.env.FB_STORAGE_BUCKET,
	messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
	appId: process.env.FB_APP_ID,
	measurementId: process.env.FB_MEASUREMENT_ID,
};

const STORAGE_FOLDER_PATH = process.env.FB_STORAGE_FOLDER_PATH;

// Initialize Firebase
const app =
	getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(app, STORAGE_FOLDER_PATH);

export default app;
