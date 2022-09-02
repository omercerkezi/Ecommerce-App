import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/productList.css";
import CartContext from "../CartContext";

const ProductList = ({ product, page }) => {
  const { addToFav } = useContext(CartContext);
  const [over, setOver] = useState(false);

  return (
    <div className="productList-container">
      <div
        className="favorite"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        {over && (
          <FavoriteBorderIcon
            sx={{ fontSize: 27 }}
            className="fav-icon"
            onClick={() => addToFav(product)}
          />
        )}
      </div>
      <div
        className="productList-img"
        alt=""
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Link to={`/${product.category}/${product.id}`}>
          {page ? (
            <img src={over ? product.src2 : product.src} />
          ) : (
            <img src={product.src} />
          )}
        </Link>
      </div>
      <div className="productList-body">
        <Link
          to={`/${product.category}/${product.id}`}
          className="productList-bodyTitle"
        >
          <h5>{product.title}</h5>
        </Link>
        <p>{product.description}</p>
        <p className="productList-color">
          {product.colors.length > 1
            ? `${product.colors.length} Colours`
            : `${product.colors.length} Colour`}
        </p>
        <h5>${product.price}</h5>
      </div>
    </div>
  );
};

export default ProductList;
