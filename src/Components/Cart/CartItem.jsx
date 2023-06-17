import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
export const CartItem = ({ Data }) => {
  const { id, title, image, price } = Data;
  const { cartItems, addToCart, RemoveFromCart, updateCart } = useContext(ShopContext);
  return (
    <>
      <div className="box" key={id}>
        <div className="item">
          <img src={image} alt="" />
          <div className="description">
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <div className="countHandler">
              <button onClick={() => RemoveFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCart(Number(e.target.value, id))}/>
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
