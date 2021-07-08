import React from "react";
import {  signInWithGoogle } from "./Essentials/LoginMethods";



const Login = () => {
  // google sign in
  
  const googlePopUp = () =>{
    signInWithGoogle();
  };
  return (
    <div>
      <h1 onClick={googlePopUp}>Okay</h1>
    </div>
  );
};

export default Login;
