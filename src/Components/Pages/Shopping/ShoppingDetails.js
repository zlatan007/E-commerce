import React from "react";
import ShoppingForm from "./ShoppingForm";
import Form from "./ShoppingForm/Form";
import ShoppingSummary from "./ShoppingSummary";

const ShoppingDetails = ({ setToggleState }) => {
  return (
    <section style={{ backgroundColor: "rgb(234,237,237)" }}>
      <div className="details-wrapper container pt-5">
        <div className="row">
          <div className="col-lg-8">
            <Form setToggleState={setToggleState} />
          </div>
          <div className="col-lg-4">
            <ShoppingSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingDetails;
