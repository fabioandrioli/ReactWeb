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

export const auth = firebase.auth();
export const database = firebase.database();