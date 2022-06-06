import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  let {login}=useContext(AuthContext)
  let navigate=useNavigate()
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={(e)=>{
e.preventDefault()
login()
navigate("/")
      }}>submit</button>
    </div>
  );
};

export default Login;
