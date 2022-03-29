import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../Store/MyContext";
import { BsCart4 } from "react-icons/bs";
import styles from "../../CSSFiles/SharedResources/Header.module.css";

const Header = () => {
  const {state: {cart}} = CartState();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor: "darkcyan"}}>
        <div className="container">
          <Link to ="/" className={`navbar-brand fw-bold text-light`} style={{fontSize: "25px"}}>
            Shopify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className={`nav-link active fw-bold text-light text-center me-3  ${styles.zoom} ${styles.common_class}`} aria-current="page">
                Home
              </Link>
              <Link to="/about" className={`nav-link me-3 fw-bold text-light text-center ${styles.zoom} ${styles.common_class}`}>
                About
              </Link>
              <Link to="/cart" className={`nav-link text-center fw-bold text-light bg-warning rounded ${styles.zoom} ${styles.common_class}`}>
                <BsCart4 />
                <span className={`ps-2`}>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
