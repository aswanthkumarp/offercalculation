import React from 'react'

function calculate1(inputValue) {
 
  const result = inputValue * 0.9;
  return result;
}

function Offer1({ result }) {
  return (
    <div className="Offer1">
      
      <h1>Amount After the 10% Discount:Rs {result}</h1>
    </div>
  );
}

export  {Offer1,calculate1};