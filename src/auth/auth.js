import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  //!move to env
  apiKey: "AIzaSyBrCkMHJo5_rUDnXHKfvIOti0sUDLdxmd8",
  authDomain: "movie-app-context-react.firebaseapp.com",
  projectId: "movie-app-context-react",
  storageBucket: "movie-app-context-react.appspot.com",
  messagingSenderId: "491237856905",
  appId: "1:491237856905:web:9baa06bd98f4e9ed635858",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
