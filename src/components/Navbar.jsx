import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../img/Bucki.png";
import { useContext, useState } from "react";
import CartContext from "../CartContext";

export default function Navbar() {
  const { cartItems, products } = useContext(CartContext);
  const [burgerClass, setBurgerClass] = useState("nav-hamburgerUnclicked");
  const [isMenuClickled, setIsMenuClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [searchClass, setSearchClass] = useState("nav-searchUnclicked");
  const [isSearchClickled, setIsSearchClicked] = useState(false);

  const updateSearch = () => {
    !isSearchClickled
      ? setSearchClass("nav-searchClicked")
      : setSearchClass("nav-searchUnclicked");

    setIsSearchClicked((prev) => !prev);
  };

  const updateMenu = () => {
    !isMenuClickled
      ? setBurgerClass("nav-searchClicked")
      : setBurgerClass("nav-searchUnclicked");

    setIsMenuClicked((prev) => !prev);
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
          <button onClick={updateSearch}>
            <SearchIcon sx={{ fontSize: 27 }} />
          </button>
          <input type="text" placeholder="Search" onClick={updateSearch} />
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
      <div className={searchClass}>
        <div className="search-unblur">
          <div className="search-head">
            <div className="search-logo">
              <NavLink to="/" className="site-title" onClick={updateSearch}>
                <img src={Logo} className="logo" alt="" />
              </NavLink>
            </div>
            <div className="search-search">
              <button onClick={updateSearch}>
                <SearchIcon sx={{ fontSize: 27 }} />
              </button>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="search-exitBtn">
              <CloseIcon sx={{ fontSize: 27 }} onClick={updateSearch} />
            </div>
          </div>
          <div className="search-body">
            <div className="list">
              {search.length > 2 ? (
                <>
                  <div className="test">
                    {products.filter(
                      (product) =>
                        product.title.toLowerCase().includes(search) ||
                        product.description.toLowerCase().includes(search) ||
                        product.sleeve.toLowerCase().includes(search)
                    ).length < 1 ? (
                      <div style={{ marginBottom: "40%" }}>
                        <h2>No results for {search}</h2>
                      </div>
                    ) : (
                      <>
                        {products
                          .filter(
                            (product) =>
                              product.title.toLowerCase().includes(search) ||
                              product.description
                                .toLowerCase()
                                .includes(search) ||
                              product.sleeve.toLowerCase().includes(search)
                          )
                          .slice(0, 3)
                          .map((item) => (
                            <Link
                              to={`/product/${item.id}`}
                              onClick={updateSearch}
                            >
                              <div className="listItem" key={item.id}>
                                <img src={item.src} />
                                <div className="searchList-body">
                                  <p className="searchList-bodycategory">
                                    {item.category}
                                  </p>
                                  <p className="searchList-bodydesc">
                                    {item.description}
                                  </p>
                                  <p className="searchList-bodytitle">
                                    {item.title}
                                  </p>
                                  <p className="searchList-color">
                                    {item.colors.length > 1
                                      ? `${item.colors.length} Colours`
                                      : `${item.colors.length} Colour`}
                                  </p>
                                  <p className="searchList-bodyprice">
                                    ${item.price}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        <Link
                          className="searchList-button"
                          to="/search"
                          search={search}
                          onClick={updateSearch}
                        >
                          <button>View All Products</button>
                        </Link>
                      </>
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="search-blur" onClick={updateSearch}></div>
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
