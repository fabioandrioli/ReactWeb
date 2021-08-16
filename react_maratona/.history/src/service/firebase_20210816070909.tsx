import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";


// const firebaseConfig = {
//     apiKey: "AIzaSyDORJu6YZKb-jxxelYgX2v0VB3lrClUQC4",
//     authDomain: "maratonanode.firebaseapp.com",
//     databaseURL: "https://maratonanode-default-rtdb.firebaseio.com",
//     projectId: "maratonanode",
//     storageBucket: "maratonanode.appspot.com",
//     messagingSenderId: "1003507279310",
//     appId: "1:1003507279310:web:1f6d4cf399a769f3d7f79f"
// };

// var firebaseConfig = {
//     apiKey: "AIzaSyBtB1XF64BYh-wp1Z-DuhDYf3-12IEa_y0",
//     authDomain: "maratona-34e7d.firebaseapp.com",
//     databaseURL: "https://maratona-34e7d-default-rtdb.firebaseio.com",
//     projectId: "maratona-34e7d",
//     storageBucket: "maratona-34e7d.appspot.com",
//     messagingSenderId: "585567873039",
//     appId: "1:585567873039:web:05936b052909bd846adb7a"
//   };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_SOTRAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {auth,database,firebase}