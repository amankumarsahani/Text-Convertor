import React, { useState } from "react";


export default function Navbar(props) {
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-check form-switch mx-3">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label class="form-check-label" for="flexSwitchCheckChecked">Dark</label>
          </div>
        </nav>
      </div>
    </>
  );
}
