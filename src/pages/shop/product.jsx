import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data, onClick }) => {
  // const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  function handleCart() {
    addToCart(data.id);
    onClick();
  }

  return (
    <div className="product" data-test="product">
      <img src={data.productImage} alt={data.productName} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> ${data.price}</p>
      </div>
      <button className="addToCartBttn" onClick={handleCart}>
        Add To Cart
      </button>
    </div>
  );
};
