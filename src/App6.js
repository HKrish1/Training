import React, { useState, useEffect } from 'react';

const Product = ({ name }) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (quantity === 1) {
      setPrice(500);
    }
    if (quantity ===0) {
      setPrice(0);
    }
    else if (quantity => 1) {
      setPrice(500 * quantity);
    }
  }, [quantity]);

  const handleBuy = () => {
    setQuantity(quantity + 1);
  }

  const handleCancel = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <center><div>
      <h2>{name}</h2>
      <button id="but" onClick={handleBuy}>Buy</button>
      <button id="but" onClick={handleCancel}>Cancel</button>
      <p class="large">Price: ${price}</p>
      <p class="large">Quantity: {quantity}</p>
    </div></center>
  );
}

export default Product;
