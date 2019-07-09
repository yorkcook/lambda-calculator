import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        onClick={() => {
          props.setFirstNumber(props.numbers);
        }}
      >
        {props.numbers}
      </button>
    </>
  );
};

export default NumberButton;
