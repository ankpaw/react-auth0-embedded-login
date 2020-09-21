import React, { useState } from "react";
import auth0 from "auth0-js";
import "./Login.css";

export const LoginButton = () => {
  return (
    <button type="submit" className="btn btn-lg btn-primary btn-block">
      Sign In
    </button>
  );
};

const Login = (props) => {
  const auth0Client = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    scope: "openid profile email",
    responseType: "token id_token",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    authenticate(email, password);
  };

  const authenticate = (username, password) => {
    auth0Client.client.login(
      {
        realm: "Username-Password-Authentication",
        username,
        password,
      },
      (err, authResult) => {
        if (err) {
          alert("Error", err.description);
          return;
        }
        if (authResult) {
          localStorage.setItem("token", JSON.stringify(authResult))
          props.history.push("/dashboard");
        }
      }
    );
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container text-center">
      <form className="form-signin" onSubmit={onSubmitHandler}>
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <LoginButton />
        <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
      </form>
    </div>
  );
};

export default Login;
