import React from "react";
import "./AuthPopUp.css";
4;
import logo from "@/assests/logo.png";
import { Input } from "@mui/joy";
import Image from "next/image";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
const AuthPopUp = () => {
  const handleLogin = () => {};
  const handleSignUp = () => {};

  const [showSignUp, setShowSignUp] = React.useState<boolean>(false);
  return (
    <div className="popup">
      {showSignUp ? (
        <div className="authform">
          <div className="left">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="right">
            <h1>Signup to become a freak</h1>
            <form action="">
              <Input
                color="warning"
                placeholder="Enter Email"
                size="lg"
                variant="outlined"
              />

              <Input
                color="warning"
                placeholder="Enter Password"
                size="lg"
                variant="outlined"
                type="password"
              />

              <div className="form_input_leftright">
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="Age"
                />
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="Weight"
                />
              </div>

              <Select
                color="warning"
                placeholder="Gender"
                size="lg"
                variant="outlined"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>

              <br />
              <label htmlFor="" color="warning">
                Height
              </label>
              <div className="form_input_leftright">
                {/* 5ft 11inch */}
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="ft"
                />
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="in"
                />
              </div>

              <button
                onClick={() => {
                  handleSignUp();
                }}
              >
                Signup
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowSignUp(false);
                }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="authform">
          <div className="left">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="right">
            <h1>Login to become a freak</h1>
            <form action="">
              <Input
                color="warning"
                placeholder="Enter Email"
                size="lg"
                variant="outlined"
              />

              <Input
                color="warning"
                placeholder="Enter Password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <button
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setShowSignUp(true);
                }}
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopUp;
