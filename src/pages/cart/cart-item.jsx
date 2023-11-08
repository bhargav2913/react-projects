import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <section className="cartItem">
      <img src={productImage} alt={productName} />
      <section className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <section className="countHandler">
          <button
            onClick={() => {
              removeFromCart(id);
              props.handleNegCount();
            }}
            data-test="subtract"
          >
            {" "}
            -{" "}
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            data-test="quantity"
          />
          <button
            onClick={() => {
              addToCart(id);
              props.handleCount();
            }}
            data-test="add"
          >
            {" "}
            +{" "}
          </button>
        </section>
      </section>
    </section>
  );
};
