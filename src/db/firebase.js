
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcouShqCCtgZ4zexjyZYcS5OjHF6WjHCE",
  authDomain: "finalreact-118c5.firebaseapp.com",
  projectId: "finalreact-118c5",
  storageBucket: "finalreact-118c5.appspot.com",
  messagingSenderId: "220344160289",
  appId: "1:220344160289:web:99072f3b42095283f99360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getStore = () => {
  return app;
};