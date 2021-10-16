import React from "react";
import './App.css'

function Topbar() {
    return(
        <div className="App">
      <div className="navbar bg-neutral text-neutral-content shadow-lg">
        <div className="navbar-start mx-4">
          <a className="text-lg" href="">Home </a>
        </div>

        <div className="navbar-end">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn">Resume</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Projects</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </div>
        </div>
      </div>
    </div>
    );
    
}

export default Topbar;