import "./Login.css";
import { useAuth, useLoader } from "../../contexts";
import { useState } from "react";
import Thoughts from "../../assets/Thoughts.svg";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

export const Login = () => {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();
  const navigate = useNavigate();
  const { loader, setLoader } = useLoader();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (event) => {
    event.preventDefault();
    setLoader("loading");
    isUserLogin ? logout() : loginUserWithCredentials(email, password);
  };

  return (
    <div className="login-page">
      <div className="background-image-container">
        <img src={Thoughts} alt="background" />
      </div>
      <div className="form-container">
        <h1 className="form-heading">Log In</h1>
        <form className="login-form">
          <label>Username</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button primary-btn" onClick={loginHandler}>
            {loader === "loading" ? <Loader /> : "Log In"}
          </button>
          <p className="signup-content">
            Create a new account.{" "}
            <span className="signup-link" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
