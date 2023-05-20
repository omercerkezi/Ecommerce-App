import { React, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ Register, error }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    purchases: [],
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Register(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">Surname:</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={(e) =>
              setDetails({ ...details, surname: e.target.value })
            }
            value={details.surname}
          />
        </div>
        <button
          type="submit"
          disabled={
            !details.email ||
            !details.password ||
            !details.name ||
            !details.surname
          }
        >
          REGISTER
        </button>
        <p>
          Already a Member?{" "}
          <Link to="/login">
            <span>Sign In.</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
