import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initAuthentication from "../../Firebase/Firebase.init";


initAuthentication();

const UseFirebase = () => {

    const [user, setUser] = useState({});
//-----------------------------------
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
//-----------------------------------
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
           
    }//signInUsingGoogle
 //-----------------------------------   
    const logOut = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })}//logOut
//-----------------------------------
//obserbe
    useEffect(() => {//useEffect
   const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
      setUser(user);
  } 
   });//onAuthStateChanged
        return unsubscribe;
    }, [])//useEffect
    //-----------------------------------
    return {
        user,
        signInUsingGoogle,
        logOut
    }//return
}//useFirbase
export default UseFirebase;