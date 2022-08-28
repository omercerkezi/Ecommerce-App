import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../img/Bucki.png";
import { useContext, useState } from "react";
import CartContext from "../CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [burgerClass, setBurgerClass] = useState("nav-hamburgerUnclicked");
  const [isMenuClickled, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    !isMenuClickled
      ? setBurgerClass("nav-hamburgerClicked")
      : setBurgerClass("nav-hamburgerUnclicked");

    setIsMenuClicked((prev) => !prev);
    console.log(isMenuClickled);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <NavLink to="/" className="site-title">
          <img src={Logo} className="logo" alt="" />
        </NavLink>
      </div>
      <div className="nav-links">
        <ul>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/kids">Kids</NavLink>
          <NavLink to="/sale">Sale</NavLink>
          <NavLink to="/collection">Collection</NavLink>
        </ul>
      </div>
      <div className="nav-bagfav">
        <div className="nav-search">
          <button>
            <SearchIcon sx={{ fontSize: 27 }} />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <PersonOutlineIcon sx={{ fontSize: 27 }} className="nav-loginBtn" />
        <FavoriteBorderIcon sx={{ fontSize: 27 }} className="nav-favBtn" />
        <NavLink className="nav-bagBtn" to="/cart">
          <span className="bag-items">
            <WorkOutlineOutlinedIcon
              sx={{ fontSize: 27 }}
              className="bag-item"
            />
            {cartItems.length > 0 ? (
              <span className="bag-items-num">{cartItems.length}</span>
            ) : null}
          </span>
        </NavLink>
        <div className="nav-menuBtn" onClick={updateMenu}>
          <MenuIcon sx={{ fontSize: 27 }} />
        </div>
      </div>
      <div className={burgerClass}>
        <div className="burger-blur" onClick={updateMenu}></div>
        <div className="burger-unblur">
          <div className="nav-exitBtn">
            <CloseIcon sx={{ fontSize: 27 }} onClick={updateMenu} />
          </div>

          <ul>
            <NavLink
              to="/men"
              onClick={updateMenu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Men</h3>
              <ArrowForwardIosIcon
                className="nav-arrow"
                sx={{ fontSize: 15 }}
              />
            </NavLink>
            <NavLink
              to="/women"
              onClick={updateMenu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Women</h3>
              <ArrowForwardIosIcon
                className="nav-arrow"
                sx={{ fontSize: 15 }}
              />
            </NavLink>
            <NavLink
              to="/kids"
              onClick={updateMenu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Kids</h3>
              <ArrowForwardIosIcon
                className="nav-arrow"
                sx={{ fontSize: 15 }}
              />
            </NavLink>
            <NavLink
              to="/sale"
              onClick={updateMenu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Sale</h3>
              <ArrowForwardIosIcon
                className="nav-arrow"
                sx={{ fontSize: 15 }}
              />
            </NavLink>
            <NavLink
              to="/collection"
              onClick={updateMenu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Collection</h3>
              <ArrowForwardIosIcon
                className="nav-arrow"
                sx={{ fontSize: 15 }}
              />
            </NavLink>
          </ul>

          <div className="nav-hamburgerButtons">
            <button className="hamburger-loginBtn">Login</button>
            <button className="hamburger-registerBtn">Register Here</button>

            <NavLink
              className="hamburgerButtons-icons"
              to="/cart"
              onClick={updateMenu}
            >
              <WorkOutlineOutlinedIcon sx={{ fontSize: 27 }} />
              {cartItems.length > 0 ? (
                <span className="hamburgerBag-itemsNum">
                  {cartItems.length}
                </span>
              ) : null}
              <span> Bag</span>
            </NavLink>

            <NavLink
              className="hamburgerButtons-icons"
              to="/production"
              onClick={updateMenu}
            >
              <FavoriteBorderIcon sx={{ fontSize: 27 }} />
              <span>Whishlist</span>
            </NavLink>
            <NavLink
              className="hamburgerButtons-icons"
              to="/production"
              onClick={updateMenu}
            >
              <HelpOutlineOutlinedIcon sx={{ fontSize: 27 }} />
              <span>Support</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*
style={({ isActive }) => {
            return {
              color: isActive ? "#088178" : "#1a1a1a",
              borderBottom: isActive
                ? "3px solid #088178"
                : "3px solid #e3e6f3",
            };
          }}
          */
