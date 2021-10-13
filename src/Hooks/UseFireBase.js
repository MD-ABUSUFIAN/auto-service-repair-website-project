
import {useState,useEffect} from 'react';
import { getAuth, signInWithPopup,signOut,GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";



const useFirebase=()=>{
    const auth = getAuth();
    const [users,setUsers]= useState({});
    const [errors,setErrors]=useState('');
    const signinGoogleUsing=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            setUsers(result.user)
        })

       
       }
       const logOut=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            setErrors(error)
          });
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUsers(user)
              // ...
            } else {
              setUsers({})
            }
          });
          return ()=>unsubscribed;

    },[])

    return {
        users,
        errors,
        logOut,
        signInWithPopup,
        
    }
}