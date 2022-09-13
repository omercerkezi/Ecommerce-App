import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cat" element={<Category />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/:cat/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
