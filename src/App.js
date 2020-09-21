import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import "./styles.css";

function App() {

  return (
    <div className="container">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
