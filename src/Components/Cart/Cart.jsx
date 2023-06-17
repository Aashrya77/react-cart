import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import data from "../../Data/Data";
import { CartItem } from "./CartItem";
const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const totalAmt = getTotal();
  const navigate = useNavigate()

  return (
    <main>
      <div className="cart-container">
        <div className="boxes">
          {data.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} Data={product} />;
            }
          })}
        </div>
        {totalAmt > 0 ? (
          <>
          <p>Subtotal: ${totalAmt}</p>
          <div className="checkout">          
            <div className="buttons">
            <Link to="/clothes">
              <button> Continue Shopping</button>
            </Link>
            <button> Checkout </button>
            
            </div>
            
          </div>
          </>
        ) : (
          <div className="end">
          <h1>Your Cart is currently empty</h1>
            <button onClick={() => navigate('/clothes')}>Go shopping</button>
          </div>
          
          
           
        )}
       
      </div>
    </main>
  );
};
export default Cart;
