import React from "react";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../CartContext";

const Sale = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="products-container">
      <h2 className="products-title">SALE</h2>
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

export default Sale;
