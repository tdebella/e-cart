import firebaseConfig from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase storage for images
export const storage = getStorage(app);

//firestore database
export const db = getFirestore(app);

//ref for store collection in db
export const storeRef = collection(db, "store");
