import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="body">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className={`card-front ${isSignUp ? "hidden" : ""}`}>
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <Link to="/" className="btn mt-4">
                            Login
                          </Link>
                          <p className="mb-0 mt-4 text-center">
                            <button className="link">
                              Forgot your password?
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`card-back ${isSignUp ? "" : "hidden"}`}>
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Full Name"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="tel"
                              className="form-style"
                              placeholder="Phone Number"
                            />
                            <i className="input-icon uil uil-phone"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <Link to="/" className="btn mt-4">
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleForm}>Toggle Form</button>
    </div>
  );
};

export default LoginPage;
