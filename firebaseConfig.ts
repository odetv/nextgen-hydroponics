import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAcFafTyv0cWvjROU19MsXORdfsjPDixJI",
  authDomain: "next-gen-hydroponics.firebaseapp.com",
  projectId: "next-gen-hydroponics",
  storageBucket: "next-gen-hydroponics.appspot.com",
  messagingSenderId: "198680950116",
  appId: "1:198680950116:web:f228d0a172d1ef6b34b671",
  measurementId: "G-N8EJ00BKYL",
  databaseURL:
    "https://next-gen-hydroponics-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
let analytics = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { app, analytics, storage, auth, firestore, database };
