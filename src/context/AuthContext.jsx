import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isAuth,setAuth]=useState(false)
  let login=()=>{
    setAuth(true)
    // navigate("/")
  }
  let logout=()=>{
    setAuth(false)
    // navigate("/login")
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
