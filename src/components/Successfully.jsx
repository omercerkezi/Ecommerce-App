import React from "react";
import { Link } from "react-router-dom";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "../styles/successfully.css";

const Successfully = ({ text }) => {
  return (
    <div className="successfully-container">
      <div className="successfully-header">
        <CheckCircleOutlinedIcon sx={{ fontSize: 90 }} />
        <h5>SUCCESS</h5>
      </div>
      <div className="successfully-body">
        <h3>{text}</h3>
        <Link to="/">
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Successfully;
