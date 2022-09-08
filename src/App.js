import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cat" element={<Category />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/:cat/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
