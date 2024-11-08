// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84VVy3auUDn6sjSpr-8dySJ3j1bChyA4",
  authDomain: "ai-travel-planner-6969.firebaseapp.com",
  projectId: "ai-travel-planner-6969",
  storageBucket: "ai-travel-planner-6969.firebasestorage.app",
  messagingSenderId: "47047681925",
  appId: "1:47047681925:web:73fbaa8278c6b32abec6ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
