import React, { useContext, useEffect, useState } from "react";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CartContext from "../CartContext";
import TuneIcon from "@mui/icons-material/Tune";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useParams } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

const Category = () => {
  const { products } = useContext(CartContext);
  const { cat } = useParams();
  const categoryProducts = products.filter(
    (product) => product.category === cat
  );
  const [filters, setFilters] = useState({});
  const [filtersIcon, setFiltersIcon] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("newest");

  const filterColorsArray = [];
  const filterSizeArray = [];
  const filterColors = [
    categoryProducts.map((item) =>
      item.colors.map((index) => filterColorsArray.push(index))
    ),
    ...new Set(filterColorsArray),
  ];
  const filterSize = [
    categoryProducts.map((item) =>
      item.size.map((index) => filterSizeArray.push(index))
    ),
    ...new Set(filterSizeArray),
  ];
  const filterBrand = [
    ...new Set(categoryProducts.map((item) => item.description)),
  ];
  const filterSleeve = [
    ...new Set(categoryProducts.map((item) => item.sleeve)),
  ];
  filterColors.shift();
  filterSize.shift();

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
      categoryProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filters, cat]);

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
    <AnimatedPage>
      <div className="products-container">
        <div className="title-sort_btn">
          <h2 className="products-title">{cat.toLocaleUpperCase()}</h2>
          <button onClick={handleFiltersIcon}>
            <span>Filter & Sort</span>
            <TuneIcon className="filter-icon" />
          </button>
        </div>
        <div className="filter-sort">
          {filtersIcon && (
            <div className="filter-container">
              <div className="filter">
                <select
                  name="colors"
                  className="select"
                  onChange={handleFilters}
                >
                  <option className="option" hidden>
                    Color
                  </option>
                  {filterColors.map((item) => (
                    <option className="option">{item}</option>
                  ))}
                </select>
                <select
                  name="description"
                  className="select"
                  onChange={handleFilters}
                >
                  <option className="option" hidden>
                    Brand
                  </option>
                  {filterBrand.map((item) => (
                    <option className="option">{item}</option>
                  ))}
                </select>
                <select
                  name="sleeve"
                  className="select"
                  onChange={handleFilters}
                >
                  <option className="option" hidden>
                    Sleeve Length
                  </option>
                  {filterSleeve.map((item) => (
                    <option className="option">{item}</option>
                  ))}
                </select>
                <select name="size" className="select" onChange={handleFilters}>
                  <option className="option" hidden>
                    Size
                  </option>
                  {filterSize.map((item) => (
                    <option className="option">{item}</option>
                  ))}
                </select>
                {Object.keys(filters).length > 0 ? (
                  <button className="clearFilter-btn" onClick={showFilters}>
                    Clear All{" "}
                    <HighlightOffIcon style={{ marginBottom: "1.5px" }} />
                  </button>
                ) : null}
              </div>
              <div className="filter">
                <select
                  className="select"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option className="option" hidden>
                    Sort By
                  </option>
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
            <ProductList key={product.id} product={product}></ProductList>
          ))}
        </div>
        <Newsletter />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Category;
