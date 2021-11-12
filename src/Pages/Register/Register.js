import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Menubar from "../Shared/Header/Menubar/Menubar";
import googleImg from "../../assets/download.png";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

// registration form
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const { user, registerUser, isLoading, authError, setAuthError ,signInWithGoogle,} = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    // registration form
    <div>
      <Menubar></Menubar>
      <div className="login-form row my-5">
        <h2 className="login-title fw-bold ms-5">Create Account</h2>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <input
              className="mt-2 p-2"
              name="name"
              onBlur={handleOnBlur}
              type="text"
              required
              placeholder="Name"
            />
            <br />
            <input
              className="mt-2 p-2"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              required
              placeholder="Email"
            />
            <br />
            <input
              className="mt-2 p-2"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              required
              placeholder="password should be at 6 characters"
            />
            <br />
            <input
              className="mt-2 p-2"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              placeholder="re-enter password"
            />
            <br />
            <input
              value="Register"
              className="btn login-form-btn fs-5 mt-3 w-50  my-4 login-btn"
              type="submit"
            />
            <br />
          </form>
        )}

        <p>
          Already have an account?<Link to="/login">Log In</Link>
        </p>

        <div className="ms-5">---------------or---------------</div>
        <div className="google-signIn">
          {/* google form btn */}
          <button
            onClick={handleGoogleSignIn}
            className="btn google-btn w-50  my-2 px-4"
          >
            <img className="me-2" src={googleImg} alt="" />
            Sign in With Google
          </button>
        </div>

        {isLoading && <Spinner animation="border" />}
        {user?.email && setAuthError("User Created successfully!")}
        {authError && <p className="text-success fw-bold mt-3">{authError}</p>}
      </div>
    </div>
  );
};

export default Register;
