import React, { useContext } from "react";
import "./Fav.css";
import { ShopContext } from "../../Context/ShopContext";
export const Fav = () => {
  const { favItems } = useContext(ShopContext);
  let favAmt = favItems.length;
  console.log(favAmt)
    return (
      <>
      {favAmt > 0 ? (
         <div className="fav-container">
          <h2>Your favourite items</h2>
         {favItems.map((items) => {
           const { id, title, price, image } = items;
           return (
             <div className="boxs" key={id}>
               <div className="img-section">
                 <img src={image} alt="" />
               </div>
               <div className="text-area">
                 <h3>{title}</h3>
                 <p>Price: ${price}</p>
               </div>
             </div>
           );
         })}
       </div> 
      ): (
        <div className="bottm">
        <h2>You currently</h2>
        <h2>have no favourite item.</h2>
        </div>
      )}
       
    </>   
    );  
};
