import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Sale from "./pages/Sale";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Collection from "./pages/Collection";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
