// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider  } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-XsJAVPyQcH4fhB2Zbj9ycG_gePJugJ8",
  authDomain: "fir-ed981.firebaseapp.com",
  projectId: "fir-ed981",
  storageBucket: "fir-ed981.appspot.com",
  messagingSenderId: "54657696364",
  appId: "1:54657696364:web:f920bd1e69f0237d4cce49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();  //need to understand
export default app;