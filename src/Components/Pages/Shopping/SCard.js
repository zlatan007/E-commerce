import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartState } from "../../../Store/MyContext";
import styles from "../../../CSSFiles/Shopping/SCard.module.css";
import { BsBorder } from "react-icons/bs";

const SCard = (props) => {
  const [qty, setqty] = useState("1");
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const product = props.prod;
  const handleClickPlus = () => {
    dispatch({
      type: "INCREMENT_ITEM",
      payload: product,
    });
  };

  const handleClickMinus = () => {
    dispatch({
      type: "DECREMENT_ITEM",
      payload: product,
    });
  };
  return (
    <>
      <div className={`card mb-3`}>
        <div className={`card-body`}>
          <div className={`row`}></div>
          <div className={`row`}>
            <div className={`col-md-4 col-sm-12 d-flex justify-content-center`}>
              <img src={product.image} className={`m-auto`} />
            </div>
            <div className={`col-md-8`}>
              <div className={`row`}>
                <div className={`col-8`}>
                  <h3>{product.title}</h3>
                  <h3 className={`${styles.heading_color}`}>
                    {product.ratings}
                  </h3>
                  <p>{product.description}</p>
                  <h3>${product.price}</h3>
                </div>
                <div
                  className={`col-4 d-flex  justify-content-center align-items-center`}
                >
                  <AiOutlinePlus
                    className={`fw-bolder ${styles.sign_svg}`}
                    onClick={handleClickPlus}
                  />
                  <h4 className={`d-inline-block mx-3 mb-0`}>
                    {product.quantity}
                  </h4>
                  <AiOutlineMinus
                    className={`fw-bolder ${styles.sign_svg}`}
                    onClick={handleClickMinus}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SCard;
