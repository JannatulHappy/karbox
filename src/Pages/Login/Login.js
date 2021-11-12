import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Menubar from "../Shared/Header/Menubar/Menubar";
import "./Login.css";
import googleImg from "../../assets/download.png";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
// login form
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    loginUser,
    signInWithGoogle,
    isLoading,
    authError,
    setAuthError,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    // login form
    <div>
      <Menubar />
      <div className="login-form row my-5">
        <h2 className="login-title fw-bold ms-5">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            className="mt-2 p-2"
            required
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
          />
          <br />
          <input
            required
            className="mt-2 p-2"
            name="password"
            onChange={handleOnChange}
            type="password"
            placeholder="Password"
          />
          <br />

          <input
            value="Login"
            className="btn fs-4  mt-3 w-50 my-4 login-form-btn"
            type="submit"
          />
        </form>
        <p>
          New to karbox?<Link to="/register">Create Account</Link>
        </p>
        {/* catch error */}

        <div className="ms-5">---------------or--------------</div>
        <div className="google-signIn">
          {/* google sign in */}
          <button
            onClick={handleGoogleSignIn}
            className="btn google-btn w-50 my-2 px-4"
          >
            <img className="me-2" src={googleImg} alt="" /> Sign in With Google
          </button>
          {isLoading && <Spinner animation="border" />}
          {user?.email && setAuthError("Login  Successfully!")}
          <p className="text-success fw-bold mt-3"> {authError}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
