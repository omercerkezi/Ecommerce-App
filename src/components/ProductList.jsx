import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../styles/productList.css";

const ProductList = ({ product, page }) => {
  const [over, setOver] = useState(false);
  return (
    <div className="productList-container">
      <div
        className="productList-img"
        alt=""
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Link to={`/product/${product.id}`}>
          {page ? (
            <img src={over ? product.src3 : product.src} />
          ) : (
            <img src={product.src} />
          )}
        </Link>
      </div>
      <div className="productList-body">
        <Link to={`/product/${product.id}`} className="productList-bodyTitle">
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
