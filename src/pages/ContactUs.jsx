import React from "react";
import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <h2>Questions, Concerns, Comments? You talk, we listen.</h2>
      <hr />
      <h4>
        If you have any additional questions or comments, we would love to hear
        from you!
      </h4>
      <h6>Submit your query using any of the methods below.</h6>
      <p>
        Email: <span>customerservice@bucki.com</span>
      </p>
      <p>
        Toll-free number:
        <span> 1-234-56789, 7AM - MIDNIGHT EST, 7 days a week</span>
      </p>
    </div>
  );
};

export default ContactUs;
