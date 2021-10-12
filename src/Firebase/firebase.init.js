import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
      initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication 
--------------------------
Step-1: Initial Setup
1. Create firebase project
2. Create web app
3. Get configuraton
4. Initialize firebase
5. Enable authentication methods
--------------------------
Step-2: Setup component
1. Create Login Componenet
2. Create Register Componenet
3. Create Route for login and Register
---------------------------
Step-3: set auth system
1. Setup Signin method 
3. User state
4. Special observer
5. Return necessary method & state from useFirebase
----------------------------
Step-4: create auth context hoot( useAuth)
1. Create a auth context
2. Create context provider
3. Set context provider context value
4. Use auth provider
5. Create useAuth hook
-----------------------------
Step-5: Create private route
1. Create private Route
2. Set private route
-----------------------------
Step-6: Redirect after login
1. after login redirect user to desired destination
*/
