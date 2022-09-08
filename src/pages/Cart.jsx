import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import Footer from "../components/Footer";
import "../styles/cart.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Newsletter from "../components/Newsletter";

const Cart = () => {
  const { cartItems, onAddQuantity, onRemove, onDelete } =
    useContext(CartContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <>
      {!cartItems.length ? (
        <div className="empty-container">
          <h2>Your Bag Is Empty</h2>
          <p>
            Once you add something to your bag, it will appear here. Ready to
            get started?
          </p>
          <Link to="/">
            <button>Get Started</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cartContainer-left">
            <h2>Your Bag</h2>
            <div className="cart-products">
              {cartItems.map((item) => (
                <div className="cart-product">
                  <img src={item.src} alt="" />
                  <div className="cartProduct-body">
                    <div className="cartProduct-info">
                      <div className="cartProduct-infoBody">
                        <h4>{item.title}</h4>
                        <p>{`Color: ${item.colors}`}</p>
                        <p>{`Brand: ${item.description}`}</p>
                        <p>{`Size: ${item.size}`}</p>
                        <p>{`Sleeve: ${item.sleeve}`}</p>
                      </div>
                      <div className="cartProduct-quantity">
                        {item.qty > 1 ? (
                          <button
                            className="cartMin-onBtn"
                            onClick={() => onRemove(item)}
                          >
                            -
                          </button>
                        ) : (
                          <button className="cartMin-offBtn">-</button>
                        )}
                        <span>{item.qty}</span>
                        {item.qty < 10 ? (
                          <button
                            className="cartPlus-onBtn"
                            onClick={() => onAddQuantity(item)}
                          >
                            +
                          </button>
                        ) : (
                          <button className="cartPlus-offBtn">+</button>
                        )}
                      </div>
                    </div>

                    <div className="cartProduct-price">
                      <div>
                        <button
                          className="cartProduct-deleteIcon"
                          onClick={() => onDelete(item)}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </button>
                      </div>
                      {item.priceFrom ? (
                        <h4
                          style={{
                            color: "red",
                            textAlign: "end",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              fontSize: "18px",
                              textDecoration: "line-through",
                            }}
                          >
                            ${parseFloat(item.priceFrom * item.qty).toFixed(2)}
                          </span>{" "}
                          ${parseFloat(item.price * item.qty).toFixed(2)}
                        </h4>
                      ) : (
                        <h4>${parseFloat(item.price * item.qty).toFixed(2)}</h4>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cartContainer-right">
            <div className="cart-total">
              <h3>ORDER SUMMARY</h3>
              <div className="cartTotal-info">
                <p>Subtotal</p>
                <p>${parseFloat(itemsPrice).toFixed(2)}</p>
              </div>
              <div className="cartTotal-info">
                <p>Shipping</p>
                <p>${parseFloat(shippingPrice).toFixed(2)}</p>
              </div>
              <div className="cartTotal-info">
                <p>Sales Tax</p>
                <p>-</p>
              </div>
              <div className="cartTotal-infoTotal">
                <p>Total</p>
                <p>${parseFloat(totalPrice).toFixed(2)}</p>
              </div>
            </div>
            <div className="cartContainer-checkBtn">
              <button>CHECKOUT</button>
              <p>OR</p>
              <button>PayPal</button>
            </div>
          </div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
