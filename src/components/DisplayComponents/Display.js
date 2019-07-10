import React from "react";

const Display = props => {
  return (
    <div>
      {/* Display any props data here */}
      {props.firstNumber}
      {props.operation}
    </div>
  );
};

export default Display;
