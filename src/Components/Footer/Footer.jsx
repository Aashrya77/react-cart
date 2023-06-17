import React from "react";
import "./Footer.css";
const Footer = () => {
  const fullDate = new Date();
    let year = fullDate.getFullYear()
  return (
    
    <footer>
      <div className="footer">
        <div>
          <h4>Help & information</h4>
          <p>Help</p>
          <p>Tracking</p>
          <p>Delivery & Returns</p>
          <p></p>
        </div>
        <div>
          <h4>About</h4>
          <p>About us</p>
          <p></p>
        </div>
        <div>
          <h4>Shopping From</h4>
          <p>You're from: </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@{year} Aashrya</p>
        <p>Private Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
