import React, { useState } from "react";
import "./Clothes.css";
import Data from "../../Data/Data";
import Cloth from "./Cloth";
const Clothes = () => {
  const [heartColor, setHeartColor] = useState(Data);

  const data = heartColor.map(item => {
    return <Cloth key={item.id} item={item} on={item.on}  id={item.id} title={item.title} price={item.price} img={item.image}/>
  })
  return (
    <div className="clothes-container">
      {data}
      </div>
  );
};

export default Clothes;
