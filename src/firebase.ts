import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2U9XiQi-ch6gwp0fZDQh0BidMN-0AB5E",
  authDomain: "nwitter-2023-799a9.firebaseapp.com",
  projectId: "nwitter-2023-799a9",
  storageBucket: "nwitter-2023-799a9.appspot.com",
  messagingSenderId: "137943428050",
  appId: "1:137943428050:web:aa34ec3a968bde290e760b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
