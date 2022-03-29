import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsDash, BsPlus } from "react-icons/bs";
// import { CartState } from "./Store/MyContext";
import { CartState } from "../../../Store/MyContext";
import styles from "../../../CSSFiles/SingleProduct/SingleProduct.module.css";

const SingleProduct = () => {
  const { state, dispatch } = CartState();
  const data = state.state;
  const cart = state.cart;
  const { id } = useParams();

  const filteredArray = data.filter((c) => c.id == id);
  return (
    <div className={styles.single_wrapper}>
      <div className="container pt-5">
        <div className={`card ${styles.card_1}`}>
          <div className="container-fliud">
            <div className={`row ${styles.wrapper}`}>
              <div className={`col-md-6 ${styles.preview}`}>
                <div className={`${styles.preview_pic} ${styles.tab_content}`}>
                  <div className={`${styles.add_class}`}>
                    <img src={filteredArray[0].image} />
                  </div>
                </div>
              </div>
              <div
                className={`col-md-6 d-flex flex-direction justify-content-center ${styles.details}`}
              >
                <h3 className={`col-md-6 ${styles.product_title}`}>
                  {filteredArray[0].title}
                </h3>
                <div className={`${styles.rating}`}>
                  <div className={`${styles.stars}`}>
                    {filteredArray[0].ratings}
                  </div>
                  <span>2 reviews</span>
                </div>
                <p className={`${styles.product_description}`}>
                  {filteredArray[0].description}
                </p>
                <h5 className={`${styles.price}`}>
                  Current price: <span>${filteredArray[0].price}</span>
                </h5>
                <p className={`${styles.vote}`}>
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>

                <div className={`${styles.action}`}>
                  {cart.some((p) => p.id === filteredArray[0].id) ? (
                    <button
                      className={`btn btn-default btn-danger ${styles.add_to_cart}`}
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className={`btn btn-default btn-success ${styles.add_to_cart}`}
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: filteredArray[0],
                        })
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.review}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12 d-flex justify-content-center py-4`}>
              <h1>Reviews</h1>
            </div>
          </div>
          <div className={`row`}>
            <div className="col-md-12 bg-white py-3 px-5 mb-3 rounded-top">
              <h3 className={`${styles.review_para}`}>
                Abhishek Singh {filteredArray[0].ratings}
              </h3>
              <p>
                These are my third shoes from Asian. The best and worth it shoes
                ever you will find These are my third shoes from Asian. The best
                and worth it shoes ever you will find
              </p>
            </div>

            <div className="col-md-12 bg-white py-3 px-5 mb-3">
              <h3>Abhishek Singh {filteredArray[0].ratings}</h3>
              <p>
                These are my third shoes from Asian. The best and worth it shoes
                ever you will find These are my third shoes from Asian. The best
                and worth it shoes ever you will find
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
