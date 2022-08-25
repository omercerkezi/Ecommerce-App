import { createContext, useState } from "react";
import { products } from "./data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product, size, color) => {
    const adedProduct = { ...product, size: size, colors: color };
    const exist = cartItems.find(
      (x) =>
        x.id === adedProduct.id &&
        x.size === adedProduct.size &&
        x.colors === adedProduct.colors
    );
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === adedProduct.id &&
          x.size === adedProduct.size &&
          x.colors === adedProduct.colors
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...adedProduct, qty: 1 }]);
    }
    console.log(adedProduct);
  };

  const onAddQuantity = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist && exist.qty > 0) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };
  return (
    <CartContext.Provider
      value={{ products, cartItems, onAdd, onAddQuantity, onRemove, onDelete }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
