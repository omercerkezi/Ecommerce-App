import { React, useContext } from "react";
import ProductList from "./ProductList";
import CartContext from "../CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = ({ title, desc, category }) => {
  const { products } = useContext(CartContext);
  let filteredProducts;
  category !== undefined
    ? (filteredProducts = products.filter((item) => item.category === category))
    : (filteredProducts = products);

  console.log(filteredProducts);

  return (
    <section className="featuredProducts">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="featuredProducts-body">
        {filteredProducts.map((product) => (
          <ProductList key={product.id} product={product}></ProductList>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
