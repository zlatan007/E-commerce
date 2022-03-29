import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../CSSFiles/ContinueShopping/ContinueShopping.module.css";

const ContinueShopping = () => {
  return (
    <section className={`py-5 d-flex flex-column justify-content-center align-items-center ${styles.main_wrapper}`}>
      <div className={`d-flex flex-column justify-content-center align-items-center`}>
        <div>
          <h2>Your Order has been placed.</h2>
        </div>
        <div>
          <p>lorem kik ihniin edhend kkni jkninj kniked iinde</p>
        </div>
        <div>
          <Link to="/">
            <button className={`btn btn-primary`}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContinueShopping;
