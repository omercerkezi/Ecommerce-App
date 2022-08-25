import { React, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import Select from "react-select";
import Footer from "../components/Footer";
import "../styles/cart.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Cart = () => {
  const { cartItems, onAddQuantity, onRemove, onDelete } =
    useContext(CartContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  console.log(cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
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
                        <p>{`Size: ${item.size}`}</p>
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
                      <h4>${parseFloat(item.price * item.qty).toFixed(2)}</h4>

                      <div>
                        <button
                          className="cartProduct-deleteIcon"
                          onClick={() => onDelete(item)}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </button>
                        <Link to="/contact" className="cartProduct-favIcon">
                          <FavoriteBorderOutlinedIcon />
                        </Link>
                      </div>
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
      <Footer />
    </>
  );
};

export default Cart;

/*

  return (
    <>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div className="cart-body">
            <div className="cart-tags">
              <h2 className="cartTags-product">PRODUCT</h2>
              <h2 className="cartTags-price">PRICE</h2>
              <h2 className="cartTags-quantity">QUANTITY</h2>
              <h2 className="cartTags-subtotal">SUBTOTAL</h2>
            </div>
            <div className="cart-products">
              {cartItems.map((item) => (
                <div className="result">
                  <button className="cartX-btn" onClick={() => onDelete(item)}>
                    x
                  </button>
                  <img src={item.src} />
                  <h4 className="cartItem-title">{item.title}</h4>
                  <p className="cartItem-price">${item.price}</p>
                  <p className="cartItem-price">{item.size}</p>
                  <p className="cartItem-price">{item.colors}</p>
                  <button
                    className="cartPlus-btn"
                    onClick={() => onRemove(item)}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button className="cartMin-btn" onClick={() => onAdd(item)}>
                    +
                  </button>

                  <p className="cartItem-subtotal">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="cart-cupTotal">
              <div className="cart-coupon">
                <h2>Apply Coupon</h2>
                <input type="text" placeholder="Enter Your Coupon" />
                <button>Apply</button>
              </div>
              <div className="cart-totals">
                <div className="cartTotals-title">
                  <h2>CART TOTALS</h2>
                </div>
                <div className="cartTotals-body">
                  <div className="cartTotals-sub">
                    <h3>Subtotal</h3>
                    <p>${itemsPrice}</p>
                  </div>
                  <div className="cartTotals-ship">
                    <h3>Shipping</h3>
                    <p>${shippingPrice}</p>
                  </div>
                  <div className="cartTotals-total">
                    <h3>Total</h3>
                    <p>${totalPrice}</p>
                  </div>
                  <button className="cartTotals-btn">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

*/
