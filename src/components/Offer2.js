import React from "react";


function calculate2(inputValue) {
 
  const result = inputValue * 0.75;
  return result;
}

function Offer2({ result }) {
  return (
    <div className="Offer2">
      
      <h1>Amount After the 25% Discount:Rs {result}</h1>
    </div>
  );
}

export { Offer2, calculate2 };
