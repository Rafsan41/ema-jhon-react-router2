import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthentication;
/*
 seteps:1 :- for authentication 
 ----------------------
 i) firebase : creat project
 ii) creat web app
 iii) get configuration
 iv) initialized firebase
 v) enable auth method
 ------------------
step: 2: - set up componant
 i) creat login componants
 i) creat register componants
 creat rout for login & register

step 3  set auth system
 i)set up sing in method
 ii)setup sign out method
  iii)use state
 iv) special ovserbe
 v)return necessary methods and states from useFirebase

step 4:creat Auth context (useAuth)
1. creat a auth context 
2. creat context provider
3.setcontext value for cosntext provider
4.use auth provider 
5. creat useAuth hook
step- 5
1.creat private route
2.set private route

step-6: redirect after log in
1.after login redirecat user to desire destination



 */