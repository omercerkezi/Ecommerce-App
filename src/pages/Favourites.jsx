import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import "../styles/favourites.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AnimatedPage from "../components/AnimatedPage";

const Favourites = () => {
  const { favourites, deleteFromFav } = useContext(CartContext);

  return (
    <AnimatedPage>
      {favourites.length === 0 ? (
        <div className="empty-container">
          <h2>Your Wishlist Is Empty</h2>
          <p>
            Once you add something to your bag, it will appear here. Ready to
            get started?
          </p>
          <Link to="/">
            <button>Get Started</button>
          </Link>
        </div>
      ) : (
        <div className="favourites-container">
          <h2>Wishlist</h2>
          <div className="favourites-products">
            {favourites.map((item) => (
              <div className="favourites-product">
                <div className="favourites-img" alt="">
                  <Link to={`/${item.category}/${item.id}`}>
                    <img src={item.src} />
                  </Link>
                </div>
                <div className="favourites-body">
                  <Link
                    to={`/${item.category}/${item.id}`}
                    className="favourites-bodyTitle"
                  >
                    <h5>{item.title}</h5>
                  </Link>
                  <p>{item.description}</p>
                  <p className="favourites-color">
                    {item.colors.length > 1
                      ? `${item.colors.length} Colours`
                      : `${item.colors.length} Colour`}
                  </p>
                  <h5>
                    ${item.price}
                    <span>
                      <DeleteOutlineOutlinedIcon
                        className="delete-icon"
                        onClick={() => deleteFromFav(item)}
                      />
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </AnimatedPage>
  );
};

export default Favourites;
