import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
import { BsFacebook, BsInstagram, BsSnapchat, BsPaypal, BsCreditCard2BackFill } from "react-icons/bs";
import {SiVisa} from 'react-icons/si'
const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="heading">
          <span>LET THE</span>
          <span>CLOTHES CHOOSE YOU</span>
        </div>
        <div className="button">
          <Link to="/clothes"><button>Shop Now</button></Link>
        </div>
      </div>
      <div className="soc-pay">
      <div className="socials">
        <Link to='/'><BsFacebook/></Link>
        <Link to='/'><BsInstagram/></Link>
        <Link to='/'><BsSnapchat/></Link>
      </div>
      <div className="payment">
        <BsPaypal/>
        <BsCreditCard2BackFill/>
        <SiVisa/>
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;
