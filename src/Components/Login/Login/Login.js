import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = true;
        newUserInfo.email = result.user.email;
        newUserInfo.name = result.user.displayName;
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mt-5 pt-5">
      <div className="border rounded w-25 m-auto mt-5 text-center p-5 shadow">
        <h1 className="text-uppercase m-2">My Tutor</h1>
        <button className="btn btn-dark" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
