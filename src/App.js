import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import "./styles.css";

function App() {

  return (
    <div class="container">
      <Navbar/>
      <div class="main-container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
