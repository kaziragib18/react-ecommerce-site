import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
      initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication 
--------------------------
Step-1: Initial Setup
1. create firebase project
2. create web app
3. get configuraton
4. initialize firebase
5. Enable authentication methods
--------------------------
Step-2: 
1. Create Login Componenet
2. Create Register Componenet
3. Create Route for login and Register
*/