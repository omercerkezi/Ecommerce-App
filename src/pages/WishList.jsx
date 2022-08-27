import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import Footer from "../components/Footer";

const WishList = () => {
  const { favourites } = useContext(CartContext);
  console.log("fav");
  console.log(favourites);

  return (
    <section className="wishlist-container">
      <h2>Whishlist</h2>
    </section>
  );
};

export default WishList;

/**
 * <div className="wishlist-products">
        <div className="wishlist-product">
          <Link to={`/product/${product.id}`} className="wishlist-productTitle">
            <h5>{product.title}</h5>
          </Link>
          <p>{product.description}</p>
          <p className="wishlist-productColor">
            {product.colors.length > 1
              ? `${product.colors.length} Colours`
              : `${product.colors.length} Colour`}
          </p>
          <h5>${product.price}</h5>
        </div>
      </div>
 * 
 * 
 */
