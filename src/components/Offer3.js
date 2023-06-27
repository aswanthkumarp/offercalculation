import React from 'react';


function calculate3(inputValue) {
 
  const result = inputValue * 0.5;
  return result;
}

function Offer3({ result }) {
  return (
    <div className="Offer3">
      
      <h1>Amount After the 50% Discount:Rs {result}</h1>
    </div>
  );
}

export  {Offer3,calculate3};
