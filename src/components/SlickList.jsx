import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/slickList.css";

const SlickList = ({ product, page }) => {
  const [over, setOver] = useState(false);
  return (
    <div className="slik-container">
      <div
        className="slik-img"
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
      <div className="slik-body">
        <Link to={`/product/${product.id}`} className="slik-bodyTitle">
          <h5>{product.title}</h5>
        </Link>
        <p>{product.description}</p>
        <p className="slik-color">
          {product.colors.length > 1
            ? `${product.colors.length} Colours`
            : `${product.colors.length} Colour`}
        </p>
        <h5>${product.price}</h5>
      </div>
    </div>
  );
};

export default SlickList;
