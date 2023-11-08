import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({ handleCount }) => {
  return (
    <section className="products">
      {PRODUCTS.map((product, id) => (
        <Product key={id} data={product} onClick={() => handleCount()} />
      ))}
    </section>
  );
};
