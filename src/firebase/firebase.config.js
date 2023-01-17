// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwwbuXRUpiAbWFGMVgTnn2iErcvOn0FzQ",
  authDomain: "five-star-hotle-room.firebaseapp.com",
  projectId: "five-star-hotle-room",
  storageBucket: "five-star-hotle-room.appspot.com",
  messagingSenderId: "976493577094",
  appId: "1:976493577094:web:e284490c126dc4cb04a207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;