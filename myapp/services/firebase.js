// import firebase from "firebase";
// const config = {
//   apiKey: "AIzaSyBOpgne15niX0Wr7TXj0r2eBuXCr2uEEjU",
//   authDomain: "chat-firebase-a5ea9.firebaseapp.com",
//   databaseURL:
//     "https://chat-firebase-a5ea9-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "chat-firebase-a5ea9",
//   storageBucket: "chat-firebase-a5ea9.appspot.com",
//   messagingSenderId: "545414103813",
//   appId: "1:545414103813:web:21016bf4f4f294d76e2d6c",
// };
// firebase.initializeApp(config);

// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyBOpgne15niX0Wr7TXj0r2eBuXCr2uEEjU",
  authDomain: "chat-firebase-a5ea9.firebaseapp.com",
  databaseURL:
    "https://chat-firebase-a5ea9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-firebase-a5ea9",
  storageBucket: "chat-firebase-a5ea9.appspot.com",
  messagingSenderId: "545414103813",
  appId: "1:545414103813:web:21016bf4f4f294d76e2d6c",
};
const app = initializeApp(config);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
