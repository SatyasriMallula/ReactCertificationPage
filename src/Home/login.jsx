import React from "react";
import styles from "./home.module.css";
import { useState } from "react";
export const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === undefined || password === undefined) {
      alert("please enter the username and password");
    } else if (username === password) {
      alert("Login Successful");
      window.location.href = "/home";
    } else {
      alert("Please enter valid credentionals!");
    }
  };
  return (
    <div id={styles.login_div}>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          placeholder="Enter username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br></br>
        <input
          placeholder="Enter password"
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
