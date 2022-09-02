import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CartContext from "../CartContext";

const Search = () => {
  const { products } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setSearch(id);
    console.log("useEffect called!");
  }, [id]);
  console.log(`search: ${search}`);

  return (
    <div className="products-container">
      <h4>Search for: "{search.toUpperCase()}"</h4>
      <div className="products-body">
        {products
          .filter(
            (product) =>
              product.title.toLowerCase().includes(search) ||
              product.description.toLowerCase().includes(search)
          )
          .map((item) => (
            <ProductList key={item.id} product={item}></ProductList>
          ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Search;
