// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCal9DUrA9xmUgO1-VSzIqgzo2S3zKtFVE",
  authDomain: "my-movieapp-a4df0.firebaseapp.com",
  projectId: "my-movieapp-a4df0",
  storageBucket: "my-movieapp-a4df0.appspot.com",
  messagingSenderId: "135859614681",
  appId: "1:135859614681:web:88a17315d607f8b5465fc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);
export const userStateChecker = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};
