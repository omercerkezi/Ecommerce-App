import React, { useContext, useEffect, useState } from "react";
import "../styles/product.css";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CartContext from "../CartContext";
import TuneIcon from "@mui/icons-material/Tune";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Search = (props) => {
  const { products } = useContext(CartContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(props.search);
    setSearch(props.search);
    console.log("useEffect called!");
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {products
          .filter((product) => product.title.toLowerCase().includes(search))
          .map((user) => (
            <li className="listItem" key={user.id}>
              {user.title}
            </li>
          ))}
      </div>
    </div>
  );
};

export default Search;
