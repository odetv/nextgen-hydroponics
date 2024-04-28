import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcFafTyv0cWvjROU19MsXORdfsjPDixJI",
  authDomain: "next-gen-hydroponics.firebaseapp.com",
  projectId: "next-gen-hydroponics",
  storageBucket: "next-gen-hydroponics.appspot.com",
  messagingSenderId: "198680950116",
  appId: "1:198680950116:web:f228d0a172d1ef6b34b671",
  measurementId: "G-N8EJ00BKYL",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
let analytics = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export default app;
