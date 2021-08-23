import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoader } from "./LoaderProvider";

export const AuthContext = createContext();

const signUpService = (firstName, lastName, email, password) => {
  return axios.post("https://mitra-write.mittalminakshi.repl.co/user/signup", {
    firstName,
    lastName,
    email,
    password,
  });
};

const loginService = (email, password) => {
  return axios.post("https://mitra-write.mittalminakshi.repl.co/user/login", {
    email,
    password,
  });
};

export const AuthProvider = ({ children }) => {
  const {
    isUserLoggedIn,
    token: savedToken,
    userId,
  } = JSON.parse(localStorage?.getItem("login")) || {
    isUserLoggedIn: false,
    token: null,
    userId: null,
  };

  const { state } = useLocation();

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [userDetails, setUserDetails] = useState(userId);
  const navigate = useNavigate();
  const { setLoader } = useLoader();

  const signUpUserWithDetails = async (
    firstName,
    lastName,
    email,
    password
  ) => {
    const userSignUpResponse = await signUpService(
      firstName,
      lastName,
      email,
      password
    );
    if (userSignUpResponse.status === 200) {
      loginUserWithCredentials(email, password);
    }
  };

  async function loginUserWithCredentials(email, password) {
    try {
      const userLoginResponse = await loginService(email, password);
      if (userLoginResponse.status === 200) {
        loginUser(userLoginResponse.data);
        setLoader("not loading");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginUser = ({ token, userId }) => {
    setToken(token);
    setLogin(true);
    setUserDetails(userId);
    navigate(state?.from ? state.from : "/");
    localStorage.setItem(
      "login",
      JSON.stringify({ isUserLoggedIn: true, token, userId })
    );
  };

  const logout = () => {
    setToken(null);
    setLogin(false);
    localStorage?.removeItem("login");

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        loginUserWithCredentials,
        logout,
        token,
        userDetails,
        setUserDetails,
        signUpUserWithDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
