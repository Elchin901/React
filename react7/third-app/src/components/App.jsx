import React from "react";
import { useState } from "react";

function App() {

    const[isMousedover, setMouseOver] = useState(false);
    const[isMousedout, setMouseOut] = useState(false);

    function over(){
        console.log("mouseover");
        setMouseOver(true);

    }
    function out(){
        console.log("mouseover");
        setMouseOver(false);

    }
 
 

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
      style={{backgroundColor: isMousedover ? "black" :"white"}} 
      onMouseOver={over} onMouseOut={out}>Submit</button>
    </div>
  );
}

export default App;
