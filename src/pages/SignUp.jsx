import { useAuth, useLoader } from "../contexts";
import { useState } from "react";
import Thoughts from "../assets/Thoughts.svg";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const { setLoader, loader } = useLoader();

  const { signUpUserWithDetails } = useAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    setLoader("loading");
    signUpUserWithDetails(firstName, lastName, email, password);
  };
  return (
    <div className="login-page">
      <div className="background-image-container">
        <img src={Thoughts} alt="background" />
      </div>
      <div className="form-container">
        <h1 className="form-heading">Sign Up</h1>
        <form className="login-form">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Your first name.."
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            onChange={(event) => setLastName(event.target.value)}
          />
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
          <button className="button primary-btn" onClick={signUpHandler}>
            {loader === "loading" ? <Loader /> : "Sign Up"}
          </button>
          <p className="login-content">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Log In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
