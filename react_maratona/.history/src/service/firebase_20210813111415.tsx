import firebase from 'firebase/app';

import 'firabase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "maratonanode.firebaseapp.com",
    databaseURL: "https://maratonanode-default-rtdb.firebaseio.com",
    projectId: "maratonanode",
    storageBucket: "maratonanode.appspot.com",
    messagingSenderId: "1003507279310",
    appId: "1:1003507279310:web:1f6d4cf399a769f3d7f79f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();