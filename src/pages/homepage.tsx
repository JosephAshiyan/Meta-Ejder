import React from 'react'
import { Link } from "react-router-dom";

import "../App.css";

import { FaDragon } from "react-icons/fa";
import { SiDungeonsanddragons } from "react-icons/si";

function handleClick (){

}
function Homepage () {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <FaDragon font-size="120px"/>
          <hr />
          Welcome To Meta Dragon
          <hr />
          The World of Truth
          <hr />
          <SiDungeonsanddragons className="App-logo" font-size="120px"/>
        </h1>
        <button 
        className="App-button"
        >
          <Link to="about">Let's Start</Link>
        </button>
      </div>
    </div>
  )
}

export default Homepage