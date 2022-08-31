import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../img/Bucki-1.png";
import appImg from "../img/pay/app.jpg";
import googleImg from "../img/pay/play.jpg";
import paymentImg from "../img/pay/pay.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong> +01 2222 365 /(+91) 01 2345 6789
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="footer-follow">
          <h4>Follow us</h4>
          <div className="footer-icons">
            <FacebookOutlinedIcon fontSize="large" className="footer-icon" />
            <TwitterIcon fontSize="large" className="footer-icon" />
            <InstagramIcon fontSize="large" className="footer-icon" />
            <YouTubeIcon fontSize="large" className="footer-icon" />
          </div>
        </div>
      </div>

      <div className="footer-col">
        <h4>About</h4>
        <Link to="/about">About us</Link>
        <Link to="/">Delivery Information</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms & Conditions</Link>
        <Link to="/">Contact us</Link>
      </div>

      <div className="footer-col">
        <h4>My Account</h4>
        <Link to="/about">Sign In</Link>
        <Link to="/">View Cart</Link>
        <Link to="/">My Wishlist</Link>
        <Link to="/">Track My Order</Link>
        <Link to="/">Help</Link>
      </div>

      <div className="footer-install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="footer-row">
          <img src={appImg} alt="" />
          <img src={googleImg} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={paymentImg} alt="" />
      </div>

      <div className="footer-copyright">
        <p>© All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
