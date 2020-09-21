import React from "react";
import './Navbar-styles.css'

export default function Navbar(props) {
  
  return (
    <header>
      <div className="container">
        <h1 className="logo">GitStudio</h1>
        <input type="checkbox" id="menu-bar"/>
        <label className="fontawesome-align-justify" htmlFor="menu-bar"></label>
        <nav className="menu">
          <a href="/">Home</a>
        </nav>
      </div>
    </header>
  );
}
