import React from "react";
import FormSignup from "./FormSignup";

const Form = ({ setToggleState }) => {
  return (
    <div>
      <FormSignup setToggleState={setToggleState} />
    </div>
  );
};

export default Form;
