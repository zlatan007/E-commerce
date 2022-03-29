import React from "react";
import { Link } from "react-router-dom";
import styles from "../../CSSFiles/Footer/Footer.module.css"
const Footer = () => {
  return (
    <div className={`container`}>
      <div className={`d-flex justify-content-center align-items-center pt-2 pb-1 `}>
        <Link to="/" className={`${styles.link_wrapper}`}>
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3 fw-medium ${styles.spans}`}>Home</span>
            <span>|</span>
          </p>
        </Link>

        <Link to="/about" className={`${styles.link_wrapper}`}>
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3`}>About Us</span>
            <span>|</span>
          </p>
        </Link>

        <Link to="/cart" className={`${styles.link_wrapper}`}>
          <p className={`me-4 ${styles.links}`}>
            <span className={`me-3`}>Our Shops</span>
          </p>
        </Link>
      </div>
      <div className={`d-flex justify-content-center align-items-center `}>
        <p className={`fw-bolder ${styles.copyright}`}>@copyright2021shopify</p>
      </div>
    </div>
  );
};

export default Footer;



