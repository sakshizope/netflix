// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-QInKkqo3SBDg5YXd8lTbozLj1ZXUWiU",
  authDomain: "front-end-netflix.firebaseapp.com",
  projectId: "front-end-netflix",
  storageBucket: "front-end-netflix.appspot.com",
  messagingSenderId: "341934146573",
  appId: "1:341934146573:web:e7217af25c013e50c34144"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth() 
export default app
export { auth, db }
