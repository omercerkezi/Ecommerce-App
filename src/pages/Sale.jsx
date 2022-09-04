import React, { useContext, useEffect, useState } from "react";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CartContext from "../CartContext";
import TuneIcon from "@mui/icons-material/Tune";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Sale = () => {
  const { products } = useContext(CartContext);
  const saleProducts = products.filter(
    (product) => product.category === "sale"
  );
  const [filters, setFilters] = useState({});
  const [filtersIcon, setFiltersIcon] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const showFilters = () => {
    setFilters({});
  };

  const handleFiltersIcon = () => {
    setFiltersIcon((prev) => !prev);
  };

  useEffect(() => {
    setFilteredProducts(
      saleProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.id - b.id));
    } else if (sort === "low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products-container">
      <div className="title-sort_btn">
        <h2 className="products-title">SALE</h2>
        <button onClick={handleFiltersIcon}>
          <span>Filter & Sort</span>
          <TuneIcon className="filter-icon" />
        </button>
      </div>
      <div className="filter-sort">
        {filtersIcon && (
          <div className="filter-container">
            <div className="filter">
              <select name="colors" className="select" onChange={handleFilters}>
                <option className="option" hidden>
                  Color
                </option>
                <option className="option">white</option>
                <option className="option">black</option>
                <option className="option">gray</option>
                <option className="option">brown</option>
                <option className="option">lightgray</option>
                <option className="option">navy</option>
                <option className="option">red</option>
                <option className="option">blue</option>
                <option className="option">lightblue</option>
                <option className="option">yellow</option>
                <option className="option">green</option>
                <option className="option">lightgreen</option>
                <option className="option">orange</option>
                <option className="option">burlywood</option>
                <option className="option">teal</option>
                <option className="option">pink</option>
              </select>
              <select
                name="description"
                className="select"
                onChange={handleFilters}
              >
                <option className="option" hidden>
                  Brand
                </option>
                <option className="option">Boys 2-7</option>
                <option className="option">Boys 8-20</option>
              </select>
              <select name="size" className="select" onChange={handleFilters}>
                <option className="option" hidden>
                  Size
                </option>
                <option className="option">XS</option>
                <option className="option">S</option>
                <option className="option">M</option>
                <option className="option">L</option>
                <option className="option">XL</option>
                <option className="option">XXL</option>
              </select>
              {Object.keys(filters).length > 0 ? (
                <button className="clearFilter-btn" onClick={showFilters}>
                  Clear All{" "}
                  <HighlightOffIcon style={{ marginBottom: "1.5px" }} />
                </button>
              ) : null}
            </div>
            <div className="filter">
              <span className="filter-text">Sort Products:</span>
              <select
                className="select"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest" className="option">
                  Newest
                </option>
                <option value="high" className="option">
                  Price: High-Low
                </option>
                <option value="low" className="option">
                  Price: Low-High
                </option>
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="products-body">
        {filteredProducts.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            page="sale"
            priceFrom={product.priceFrom}
          ></ProductList>
        ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Sale;
