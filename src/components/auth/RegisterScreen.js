import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="mb-5">Register</h3>
      <form>
        <input
          className="auth_input"
          autoComplete="off"
          type={"text"}
          placeholder="email"
          name="email"
        />
        <input
          className="auth_input"
          type={"password"}
          placeholder="******"
          name="password"
        />
        <input
          className="auth_input"
          type={"password"}
          placeholder="confirm password"
          name="password"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5 mt-1" disabled>
          Register
        </button>
        <Link to={"/auth/login"} className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
