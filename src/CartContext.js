import { createContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { products } from "./data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFav = (product) => {
    const exist = favourites.find((x) => x.id === product.id);
    if (!exist) {
      setFavourites([...favourites, product]);
    }
  };

  const deleteFromFav = (product) => {
    const exist = favourites.find((x) => x.id === product.id);
    if (exist) {
      setFavourites(favourites.filter((x) => x.id !== product.id));
    }
  };

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
  };

  const onAddQuantity = (product) => {
    const exist = cartItems.find(
      (x) =>
        x.id === product.id &&
        x.colors === product.colors &&
        x.size === product.size
    );
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id &&
          x.colors === product.colors &&
          x.size === product.size
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (x) =>
        x.id === product.id &&
        x.colors === product.colors &&
        x.size === product.size
    );
    if (exist && exist.qty > 0) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id &&
          x.colors === product.colors &&
          x.size === product.size
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  const onDelete = (product) => {
    const exist = cartItems.find(
      (x) =>
        x.id === product.id &&
        x.colors === product.colors &&
        x.size === product.size
    );
    if (exist) {
      setCartItems(
        cartItems.filter(
          (x) =>
            x.id !== product.id ||
            x.colors !== product.colors ||
            x.size !== product.size
        )
      );
    }
  };
  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        favourites,
        setCartItems,
        setFavourites,
        addToFav,
        deleteFromFav,
        onAdd,
        onAddQuantity,
        onRemove,
        onDelete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
