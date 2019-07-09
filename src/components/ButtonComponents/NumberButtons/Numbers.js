import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersAll, setNumbersAll] = useState(numbers);
  console.log("numbers", numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbersAll.map(numbers => (
        <NumberButton numbers={numbers} />
      ))}
    </div>
  );
};

export default Numbers;
