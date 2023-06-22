
import React from "react";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCepphvzhSq30ayFHsKl7rl-wczNb4R_lY",
    authDomain: "kbhshoes-a1a08.firebaseapp.com",
    projectId: "kbhshoes-a1a08",
    storageBucket: "kbhshoes-a1a08.appspot.com",
    messagingSenderId: "325173280291",
    appId: "1:325173280291:web:effb96cc171bc8ef9f7b96",
    measurementId: "G-1R60RH78Q8"
  };
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
  const db = getDatabase(app)
  const storage = getStorage(app)

  export {auth,db,storage}