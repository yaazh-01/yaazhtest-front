import React, { useState } from "react";
import Checkboxes from "../../Atoms/Checkboxes";
import InputField from "../../Atoms/InputField";
import YButton from "../../Atoms/YButton";
import "./Login.css";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  return (
    <div className="logCntnr">
      <div className="lftCntr">
        <img src="/assets/images/main_logo.png" />
      </div>
      <div className="rtFrmCntnr">
        {currentState === "login" ? (
          <>
            <h3>Login</h3>
            <form>
              <div className="row mx-0">
                <div className="col-md-12">
                  <InputField
                    label="Email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Password"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <Checkboxes label="Remember me" />
                  <p
                    className="frgtPs mb-0 cursorDecoy"
                    onClick={() => setCurrentState("fpass")}
                  >
                    Forgot Password?
                  </p>
                </div>
                <div className="col-md-12">
                  <YButton label="Login" />
                  <p className="rdrLnks">
                    Need an account?{" "}
                    <span
                      className="colorPrimary cursorDecoy"
                      onClick={() => setCurrentState("register")}
                    >
                      Register Here!
                    </span>
                  </p>
                </div>
              </div>
            </form>
            <div className="orDvr mt-2 mb-3">
              <p>OR</p>
            </div>
            <div className="text-center">
              <p>Login with</p>
              <img src="/assets/svg/google.svg" className="cursorDecoy" />
            </div>
          </>
        ) : currentState === "register" ? (
          <>
            <h3>Registration</h3>
            <form>
              <div className="row mx-0">
                <div className="col-md-6">
                  <InputField
                    label="First Name"
                    placeholder="Enter first name"
                    name="fname"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    label="Last Name"
                    placeholder="Enter last name"
                    name="lname"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Password"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Confirm Password"
                    placeholder="Retype your password"
                    name="cpassword"
                  />
                </div>
                <div className="col-md-12">
                  <YButton label="Let's begin" />
                  <p className="rdrLnks">
                    Have an account?{" "}
                    <span className="colorPrimary cursorDecoy">
                      Login Here!
                    </span>
                  </p>
                </div>
              </div>
            </form>
            <div className="orDvr mt-2 mb-3">
              <p>OR</p>
            </div>
            <div className="text-center">
              <p>Register with</p>
              <img src="/assets/svg/google.svg" className="cursorDecoy" />
            </div>
          </>
        ) : (
          <>
            <h3>Forgot Password</h3>
            <form>
              <div className="row mx-0">
                <div className="col-md-12">
                  <InputField
                    label="Email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="col-md-12">
                  <YButton label="Reset Password" />
                  <p className="rdrLnks">
                    Back to{" "}
                    <span
                      className="colorPrimary cursorDecoy"
                      onClick={() => setCurrentState("login")}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
