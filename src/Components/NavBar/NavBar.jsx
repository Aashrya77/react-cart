import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../Images/logo.png.png";
import { BsSearch, BsPerson, BsCart4 } from "react-icons/bs";
import Footer from "../Footer/Footer";
import { FcLike } from "react-icons/fc";
import { DropDown } from "./DropDown";
import { ShopContext } from "../../Context/ShopContext";



const NavBar = () => {
  const navigate = useNavigate();
  const {setMenuIsOpen, menuIsOpen} = useContext(ShopContext)
  return (
    <div className="shared-layout">
      <nav>
        <div className="nav-container">
          <div className="logo_list">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <ul className="logo-sec-list">
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="search">
            <input type="text" placeholder="Search" />
            <div className="S-icon">
              <BsSearch />
            </div>
          </div>

          <ul className="list">
            <li>
              <Link to="/cart">
                <BsCart4 className="cart" />
              </Link>
            </li>
            <li>
              <FcLike className="like" onClick={() => navigate("/Fav")} />
            </li>
            <li>
              <BsPerson className="Person-I" onClick={() => setMenuIsOpen(true)}/>            
            </li>
          </ul>
          {menuIsOpen && <DropDown/>}
          
        </div>
        
        </nav>
        <Outlet />
     
      <Footer />
    </div>
  );
};

export default NavBar;
