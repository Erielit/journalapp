import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth_title">Login</h3>
      <form>
        <input className="auth_input" autoComplete="off" type={"text"} placeholder="email" name="email" />
        <input className="auth_input" type={"password"} placeholder="******" name="password" />
        <button type="submit" className="btn btn-primary btn-block mt-1" disabled>
          Login
        </button>
        <div className="mt-5 google-btn mb-5">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <Link className="link" to={"/auth/register"}>
          Create new acount
        </Link>
      </form>
    </>
  );
};
