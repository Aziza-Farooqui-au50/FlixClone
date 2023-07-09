import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCplpG_J_0YB2GjJc1EtUUnSqtmDK9yNes",
  authDomain: "my-netflix-clone-d786.firebaseapp.com",
  projectId: "my-netflix-clone-d786",
  storageBucket: "my-netflix-clone-d786.appspot.com",
  messagingSenderId: "176254069511",
  appId: "1:176254069511:web:18fdca22a5a337fc5ff3a",
  measurementId: "G-D3GE36WPG9",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
