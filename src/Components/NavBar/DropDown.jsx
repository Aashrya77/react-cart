import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { ShopContext } from "../../Context/ShopContext";
import { BsToggleOn } from "react-icons/bs";

export const DropDown = () => {
  const { setMenuIsOpen } = useContext(ShopContext);
  return (
    <div className="drop-container">
      <div className="tops">
        <div className="left">
          <a href="/signIn" style={{ color: "black" }}>
            Sign In
          </a>
        </div>
        <div className="right">
          <GrFormClose
            onClick={() => setMenuIsOpen(false)}
            style={{ fontSize: "22px", marginLeft: "8px" }}
          />
        </div>
      </div>
      <div className="down">
        <ul className="down-ul">
          <li>My profile</li>
          <li className='show'>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className='show'>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
          
          {/*<li>
            <BsToggleOn className="Dark-toggle" /> Dark Mode
  </li>*/}
        </ul>
      </div>
    </div>
  );
};
