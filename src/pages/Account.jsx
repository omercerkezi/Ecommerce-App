import React, { useContext } from "react";
import CartContext from "../CartContext";
import AnimatedPage from "../components/AnimatedPage";
import "../styles/account.css";

const Account = ({ Logout }) => {
  const { logedUser } = useContext(CartContext);
  return (
    <AnimatedPage>
      <div className="account-container">
        <div className="account-head">
          <h1>
            Wellcome back, {logedUser.name}{" "}
            <span>
              <button onClick={Logout}>Logout</button>
            </span>
          </h1>
          <p>
            This page is unique to you. Track recent orders, review your
            wishlist, update account details, discover recommended products, and
            more.
          </p>
        </div>
        <div className="account-body">
          <div className="account-personalInfo">
            <h3>Account informations</h3>
            <h5>
              Name: <span>{logedUser.name}</span>
            </h5>
            <h5>
              Surname: <span>{logedUser.surname}</span>
            </h5>
            <h5>
              Email: <span>{logedUser.email}</span>
            </h5>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Account;
