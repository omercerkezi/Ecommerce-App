import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import Successfully from "../components/Successfully";
import RegisterForm from "../components/RegisterForm";
import "../styles/login.css";

const Register = () => {
  const { users, addUser } = useContext(CartContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const [error, setError] = useState("");

  const Register = (details) => {
    const userMatching = users.find((user) => user.email === details.email);
    console.log(userMatching);
    if (userMatching) {
      setError("Email has already been taken.");
    } else {
      console.log(
        "Congratulations, your account has been successfully created."
      );
      addUser(details);
      setUser(details);
    }
  };

  return (
    <div className="login-container">
      {user.email !== "" ||
      user.password !== "" ||
      user.name !== "" ||
      user.surname !== "" ? (
        <Successfully text="Congratulations, your account has been successfully created." />
      ) : (
        <RegisterForm Register={Register} error={error} />
      )}
    </div>
  );
};

export default Register;
