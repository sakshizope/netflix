// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY2oxgOHyR8wj3ya0dDpXkEDzK7QsT3aw",
  authDomain: "netflix-clone-f3026.firebaseapp.com",
  projectId: "netflix-clone-f3026",
  storageBucket: "netflix-clone-f3026.appspot.com",
  messagingSenderId: "677444021514",
  appId: "1:677444021514:web:607aa7bf8aca603bbd5ef3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth() 
export default app
export { auth, db }