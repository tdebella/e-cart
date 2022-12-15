import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Config = {
  apiKey: "AIzaSyAJlHpScsvuoGX7p5bM8gI3CsVs_tFX9Ak",
  authDomain: "e-cart-65d62.firebaseapp.com",
  projectId: "e-cart-65d62",
  storageBucket: "e-cart-65d62.appspot.com",
  messagingSenderId: "726087409872",
  appId: "1:726087409872:web:ba0400255ea202c135fed5",
};

const app = initializeApp(Config);

export const auth = getAuth(app);

export default app;
