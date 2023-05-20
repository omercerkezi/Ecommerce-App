import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartContext from "../CartContext";
import "../styles/navbar.css";
import Logo from "../img/Bucki.png";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Navbar = () => {
  const { cartItems, products } = useContext(CartContext);
  const [burgerClass, setBurgerClass] = useState("nav-hamburgerUnclicked");
  const [isMenuClickled, setIsMenuClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [searchClass, setSearchClass] = useState("nav-searchUnclicked");
  const [isSearchClickled, setIsSearchClicked] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search");
  const categories = ["men", "women", "kids", "sale", "collections"];
  const cartSize = cartItems
    .map((item) => item.qty)
    .reduce((total, task) => total + task, 0);
  console.log(cartSize);

  const updateSearch = () => {
    !isSearchClickled
      ? setSearchClass("nav-searchClicked")
      : setSearchClass("nav-searchUnclicked");

    setIsSearchClicked((prev) => !prev);
    setSearch("");
    setPlaceholder("Search");
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
        <NavLink to="/Ecommerce-App" className="site-title">
          <img src={Logo} className="logo" alt="" />
        </NavLink>
      </div>
      <div className="nav-links">
        <ul>
          {categories.map((item) => (
            <NavLink to={`/${item}`}>{item.toUpperCase()}</NavLink>
          ))}
        </ul>
      </div>
      <div className="nav-bagfav">
        <div className="nav-search">
          <button onClick={updateSearch}>
            <SearchIcon sx={{ fontSize: 27 }} />
          </button>
          <input type="text" placeholder={placeholder} onClick={updateSearch} />
        </div>
        <PersonOutlineIcon sx={{ fontSize: 27 }} className="nav-loginBtn" />

        <NavLink className="nav-bagBtn" to="/wishlist">
          <FavoriteBorderIcon sx={{ fontSize: 27 }} className="nav-favBtn" />
        </NavLink>

        <NavLink className="nav-loginBtn" to="/login">
          <PersonOutlineIcon sx={{ fontSize: 27 }} />
        </NavLink>
        <NavLink className="nav-favBtn" to="/favourites">
          <FavoriteBorderIcon sx={{ fontSize: 27 }} />
        </NavLink>
        <NavLink className="nav-bagBtn" to="/cart">
          <span className="bag-items">
            <WorkOutlineOutlinedIcon
              sx={{ fontSize: 27 }}
              className="bag-item"
            />
            {cartSize > 0 ? (
              <span className="bag-items-num">
                {cartSize < 10 ? `${cartSize}` : "9+"}
              </span>
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
              <NavLink
                to="/Ecommerce-App"
                className="site-title"
                onClick={updateSearch}
              >
                <img src={Logo} className="logo" alt="" />
              </NavLink>
            </div>
            <div className="search-search">
              <button onClick={updateSearch}>
                <SearchIcon sx={{ fontSize: 27 }} />
              </button>
              <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
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
                        product.description.toLowerCase().includes(search)
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
                              product.description.toLowerCase().includes(search)
                          )
                          .slice(0, 3)
                          .map((item) => (
                            <Link
                              to={`/product/${item.id}`}
                              onClick={updateSearch}
                            >
                              <div className="listItem" key={item.id}>
                                <img src={item.src} alt="" />
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
                          to={`/search/${search}`}
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
            {categories.map((item) => (
              <NavLink
                to={`/${item}`}
                onClick={updateMenu}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h3>{item.toLocaleUpperCase()}</h3>
                <ArrowForwardIosIcon
                  className="nav-arrow"
                  sx={{ fontSize: 15 }}
                />
              </NavLink>
            ))}
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
              {cartSize > 0 ? (
                <span className="hamburgerBag-itemsNum">
                  {cartSize < 10 ? `${cartSize}` : "9+"}
                </span>
              ) : null}
              <span> Bag</span>
            </NavLink>

            <NavLink
              className="hamburgerButtons-icons"
              to="/wishlist"
              // to="/favourites"
              onClick={updateMenu}
            >
              <FavoriteBorderIcon sx={{ fontSize: 27 }} />
              <span>Whishlist</span>
            </NavLink>
            <NavLink
              className="hamburgerButtons-icons"
              to="/contact-us"
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
};

export default Navbar;
