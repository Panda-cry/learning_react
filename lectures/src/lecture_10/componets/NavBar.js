import React, {useContext}from "react";
import AuthContext from "./auth-context";


function NavBar(){
  const ctx = useContext(AuthContext)
    function onClickLogoutHandler(){
        ctx.logout()
    }

    return (
        <React.Fragment>
<nav className="navbar navbar-expand-lg ">
{ctx.isLoggedIn === true && <div className="container-fluid">
    <a className="navbar-brand" href="#">Welcome</a>

    <div  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link" href="#">Petar</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Admin</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#" onClick={onClickLogoutHandler}>Logout</a>
        </li>
      </ul>

    </div>
  </div>}
</nav>
        </React.Fragment>)
    
}


export default NavBar;