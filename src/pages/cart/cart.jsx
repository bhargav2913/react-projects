/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = ({ handleCount, handleNegCount }) => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart" data-test="cartitems">
        {PRODUCTS.map((product, id) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={id}
                data={product}
                handleCount={handleCount}
                handleNegCount={handleNegCount}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")} data-test="continue-btn">
            {" "}
            Continue Shopping{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
