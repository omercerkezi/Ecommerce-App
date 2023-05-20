import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";
import Account from "./Account";

const Login = () => {
  const { users, logedUser, loginUser, LogoutUser } = useContext(CartContext);
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    const userMatching = users.find(
      (user) =>
        user.email === details.email && user.password === details.password
    );

    if (userMatching) {
      console.log("Logged in");
      setUser(userMatching);
      loginUser(userMatching);
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    LogoutUser();
    setError("");
    console.log("Logged out");
  };

  return (
    <div className="login-container">
      {logedUser ? (
        <Account Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
