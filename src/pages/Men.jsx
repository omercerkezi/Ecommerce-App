import React from "react";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../CartContext";

const Men = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="products-container">
      <h2 className="products-title">MEN</h2>
      <div className="products-body">
        {products.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            page="product"
          ></ProductList>
        ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Men;

/*

.productList-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 20%;
  margin-bottom: 20px;
}

.productList-img img {
  width: 100%;
  max-width: 100%;
  display: block;
}

.productList-body {
  padding-top: 7px;
  padding-left: 7px;
  width: 100%;
}

.productList-bodyTitle {
  color: #1a1a1a;
  text-decoration: none;
}

.productList-bodyTitle:hover {
  text-decoration: underline;
}

.productList-body h5 {
  margin: 0;
  font-weight: 600;
}

.productList-body p {
  width: 100%;
  margin: 2px 0;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: rgb(100, 100, 100);
}

.productList-body h6 {
  margin: 5px 0;
}

@media (max-width: 1050px) {
  .productList-container {
    width: 24%;
  }
}

@media (max-width: 600px) {
  .productList-container {
    width: 45%;
  }
}



*/
