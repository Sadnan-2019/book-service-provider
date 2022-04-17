// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkFwEjlV9V3s4jYncnDGodNkVGlI9-6Gg",
  authDomain: "books-service-provider.firebaseapp.com",
  projectId: "books-service-provider",
  storageBucket: "books-service-provider.appspot.com",
  messagingSenderId: "1042260666363",
  appId: "1:1042260666363:web:b211394fa62ab5cd7ecd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
