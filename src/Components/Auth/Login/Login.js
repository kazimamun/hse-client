import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';

firebase.initializeApp(firebaseConfig)
const Login = () => {   
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();    
    const { from } = location.state || { from: { pathname: "/" } };
    //google sign in
    const handleGoogleSignIn =()=>{
        const googleSignInProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleSignInProvider)
        .then(result=>{
            const {displayName, email} = result.user;
            const signedInUser = {
                name : displayName,
                email : email
            };
            setLoggedInUser(signedInUser); 
            history.replace(from); 
        })
        .catch(err=>{
            console.log(err.message)
        })
    };
    //sign out
    const handleLogOut = ()=>{
        firebase.auth().signOut()
        .then(result=>{
            const user = {
                email : ''
            };
            setLoggedInUser(user);
        })
        .catch(err=>{
            console.log(err.message);
        });
    };
    return (
        <div>
            <h1>this is login page</h1>
            {
                loggedInUser.email ? <button onClick={handleLogOut}>Log Out</button> :
                                    <button onClick={handleGoogleSignIn}>Login with Google</button>
            }
        </div>
    );
};

export default Login;