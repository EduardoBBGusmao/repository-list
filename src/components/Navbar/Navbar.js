import React from "react";
import './Navbar-styles.css'

export default function Navbar(props) {
  
  return (
    <header>
      <div class="container">
        <h1 class="logo">GitStudio</h1>
        <input type="checkbox" id="menu-bar"/>
        <label class="fontawesome-align-justify" for="menu-bar"></label>
        <nav class="menu">
          <a href="/">Home</a>
        </nav>
      </div>
    </header>
  );
}
