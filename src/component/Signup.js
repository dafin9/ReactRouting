import React from "react";
import illu1 from "../img/illu1.svg";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div classNameName="container">
      <div className="img">
        <img src={illu1} alt="BG" />
      </div>
      <div class="login-content">
          <form action="#">
            <div class="title-container">
              <h1>SignUp</h1>
              <h2>Welcome :) </h2>
              <p>Enter your personal detail and start journey with us.</p>
            </div>

            <div class="login-inner-content">
              <div class="input-div one">
                <div class="i"></div>
                <div class="div">
                  <input type="text" class="input" placeholder="Name" />
                </div>
              </div>

              <div class="input-div one">
                <div class="i"></div>
                <div class="div">
                  <input type="text" class="input" placeholder="User Id" />
                </div>
              </div>

              <div class="input-div one">
                <div class="i"></div>
                <div class="div">
                  <input type="text" class="input" placeholder="Email" />
                </div>
              </div>

              <div class="input-div pass">
                <div class="i"></div>
                <div class="div">
                  <input
                    id="pswrd"
                    type="password"
                    class="input"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="input-div one">
                <div class="i"></div>
                <div class="div">
                  <input
                    type="password"
                    class="input"
                    id="pswrd"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              {/* <Link to="/">Forgot password</Link> */}
            </div>

            <input type="submit" class="btn" value="Register Now" />

            <h5>
              Alreay have account? <Link to="/Login">Login</Link>
            </h5>
          </form>
      </div>
    </div>
  );
}
