import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const amount=useSelector(state=>state.amount);
 
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Welcome to the Store 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
                <button className="btn btn-primary"> Your Balance is : {amount}</button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
