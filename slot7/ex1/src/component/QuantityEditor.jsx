import React, { useState } from 'react';

function QuantityEditor() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(value >= 0 ? value : 0);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Edit Product Quantity</h2>

      <button onClick={decrease}>-</button>

      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        style={{ width: 60, textAlign: 'center', margin: '0 10px' }}
      />

      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityEditor;
