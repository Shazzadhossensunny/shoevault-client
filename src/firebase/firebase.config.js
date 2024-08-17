import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCpDrfKv0Nz9UsUZSROnJL6Z9GVvwY45R0",
  authDomain: "shoevault-681ba.firebaseapp.com",
  projectId: "shoevault-681ba",
  storageBucket: "shoevault-681ba.appspot.com",
  messagingSenderId: "583742709104",
  appId: "1:583742709104:web:82465443d3ee6519d0c3b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;