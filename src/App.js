import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import LoginRegister from "./pages/LoginRegister";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
