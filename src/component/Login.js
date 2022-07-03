import React from "react";
import illu1 from "../img/illu1.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={illu1} alt="BG" align="center" className="img-fluid" />
        </div>
        <div className="login-content">
          <form action="#">
            <div className="title-container">
              <h1>Login</h1>
              <h2>Welcome Again :)</h2>
              <p>Enter your personal detail and start journey with us.</p>
            </div>
            <div className="login-inner-content">
              <div className="input-div one">
                <div className="i"></div>
                <div className="div">
                  <input type="text" className="input" placeholder="User Id" />
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
              <a href="forgot.html">Forgot password</a>
            </div>

            <input type="submit" className="btn" value="Login Now" />
            <h5>
              Don't have an account? <Link to={"/Signup"}>Create Account</Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
