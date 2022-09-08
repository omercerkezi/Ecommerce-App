import { React, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "../CartContext";
import "../styles/productList.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductList = ({ product, priceFrom }) => {
  const { addToFav } = useContext(CartContext);
  const { cat } = useParams();
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
          {cat ? (
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
        {priceFrom ? (
          <h5 style={{ color: "red", fontWeight: "600" }}>
            <span
              style={{
                color: "black",
                textDecoration: "line-through",
                fontWeight: "500",
              }}
            >
              ${priceFrom}
            </span>{" "}
            ${product.price}
          </h5>
        ) : (
          <h5>${product.price}</h5>
        )}
      </div>
    </div>
  );
};

export default ProductList;
