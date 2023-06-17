import React, { useContext, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { ShopContext } from "../../Context/ShopContext";

const Cloth = ({ id, title, price, item, img, on }) => {
  const [onn, setOn] = useState(on);

  const { addToCart, cartItems, favItems, setFavItems } = useContext(ShopContext);
  const cartItemsNumber = cartItems[id];

  const styles = {
    color: onn ? "red" : "black",
  };

  const handleAddToFav = (item) => {
    setFavItems([...favItems, item])
  }



  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <div className="cloth" key={id}>
      <div className="img-sectionn">
        <img src={img} alt="" />
      </div>
      <div className="top">
        <div className="text-section">
          <h4>{title}</h4>
          <p>Price: {price}$</p>
        </div>

        <div className="fav" onClick={() => toggle()} style={styles}>
          <BsFillHeartFill onClick={() => handleAddToFav(item)} />
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => addToCart(id)}>
          Add to cart
          {cartItemsNumber > 0 && <>({cartItemsNumber})</>}
        </button>
      </div>
    </div>
  );
};

export default Cloth;
