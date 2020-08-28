import React from "react";
import "./App.css";
import Home from "./Home";
import Procedures from "./Procedures";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* get react router dom need to install -done*/}
      {/* pass Home Component here */}
      <Home />
      <Procedures />
      <Contact />
    </div>
  );
}

export default App;
