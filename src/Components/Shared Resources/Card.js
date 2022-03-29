import React from "react";
import { CartState } from "../../Store/MyContext";
import { Link } from "react-router-dom";
import styles from "../../CSSFiles/SharedResources/Card.module.css";
const Card = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <div className={`card card-1 mb-4 ${styles.zoom}`}>
        <Link to={"/product/" + props.id}>
          <div
            className={`col-md-12 d-flex justify-content-center pt-3`}
            style={{ height: "250px" }}
          >
            <img src={props.image} className="card-img-top w-100" alt="..." />
          </div>
        </Link>
        <hr className={`mt-2 mb-1`} />

        <div className="card-body col-md-12">
          <div className={`col-md-12`}>
            <div>
              <span>
                <h3 className="card-title text-center fw-bolder">
                  {props.title}
                </h3>
              </span>
            </div>
          </div>

          <h6 className="card-text">{props.description}</h6>
          <div className="card-text">
            <h5 className={`${styles.ratings}`}>{props.ratings}</h5>
          </div>
          <div className=" card-text">
            <h4 className="text-warning font-bold">${props.price}</h4>
          </div>
        </div>

        <div className={`mb-3`}>
          {cart.some((p) => p.id === props.id) ? (
            <div>
              <button
                className={`d-block w-50 m-auto bg-danger py-2 text-light text-lg rounded`}
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: props,
                  })
                }
              >
                Remove from Cart
              </button>
            </div>
          ) : (
            <button
              className={`d-block w-50 m-auto bg-success py-2 text-light text-lg rounded`}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: props,
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
