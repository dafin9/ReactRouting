import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import illu1 from "../img/illu1.svg";
import Login from "./Login"
import AccSetting from "./AccSetting";

export default function Signup() {

  // function RegisterNow() {
  //   return (
  //     <Login />
  //   )
  // }

  return (
    <div className="container">
      <div className="img">
        <img src={illu1} alt="BG" />
      </div>
      <div className="login-content">
        <form action="#">
          <div className="title-container">
            <h1>SignUp</h1>
            <h2>Welcome :) </h2>
            <p>Enter your personal detail and start journey with us.</p>
          </div>

          <div className="login-inner-content">
            <div className="input-div one">
              <div className="i"></div>
              <div className="div">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>

            <div className="input-div one">
              <div className="i"></div>
              <div className="div">
                <input type="text" className="input" placeholder="User Id" />
              </div>
            </div>

            <div className="input-div one">
              <div className="i"></div>
              <div className="div">
                <input type="text" className="input" placeholder="Email" />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i"></div>
              <div className="div">
                <input
                  id="pswrd"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="input-div one">
              <div className="i"></div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  id="pswrd"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <a href="./AccSetting.js" >Login as a Guest</a>
          </div>

          <input type="submit" className="btn" value="Register Now" />

          <h5>
            Alreay have account? <Link to={"/"}>Login</Link>
          </h5>
        </form>
      </div>
    </div>
  );
}
