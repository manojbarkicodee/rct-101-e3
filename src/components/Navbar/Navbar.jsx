import React, { useContext } from "react";

// use react-router Link or NavLink
// const Link = <a />;

import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  let {isAuth,login,logout}=useContext(AuthContext)
let navigate=useNavigate()
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to={isAuth?"/products":"/"}>Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={()=>{
        if(isAuth){
          logout()
          
        }
        else{
          login()
navigate("./login")
        }
      }} data-cy="navbar-login-logout-button">{isAuth ?"logout" : "login"}</button>
    </div>
  );
};

export default Navbar;
