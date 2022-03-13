import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="topFooter">
          <div className="container d-flex align-items-center justify-content-around py-3">
            <div className="ftrSpCard d-flex align-items-center">
              <span className="material-icons">local_shipping</span> On Time
              Shipping & Delivery
            </div>
            <div className="ftrSpCard d-flex align-items-center ml-2">
              <span className="material-icons">percent</span> Exclusive Offers
            </div>
            <div className="ftrSpCard d-flex align-items-center ml-2">
              <span className="material-icons">credit_score</span> Secure
              Payment
            </div>
          </div>
          <div className="container">
            <hr className="mt-1" />
          </div>
        </div>
        <div className="mnFooter mt-5">
          <img className="mnFtLogo" src="/assets/images/main_logo.png" />
          <div className="cntctInfo mt-4">
            <a href="tel:+919876543210">
              <span className="material-icons">call</span>+91 9876543210
            </a>{" "}
            |{" "}
            <a href="mailto:info@yaazh.in">
              <span className="material-icons">mail</span>info@yaazh.in
            </a>
          </div>
        </div>
        <div className="cpyRtCnt container mt-5 pb-4 d-flex align-items-center justify-content-between">
          <div className="cprtTxt">
            © {new Date().getFullYear()}, Yaazh.in - All Rights Reserved.
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
