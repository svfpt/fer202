import React, { useState } from "react";

export default function Exercise1() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="container mt-4">
      <h3>Exercise 1 - Quantity Control</h3>

      <div className="d-flex align-items-center mt-3">
        <button
          className="btn btn-danger"
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
        >
          -
        </button>

        <input
          type="number"
          className="form-control mx-3 text-center"
          style={{ width: "80px" }}
          value={quantity}
          onChange={(e) =>
            Number(e.target.value) >= 0 && setQuantity(e.target.value)
          }
        />

        <button
          className="btn btn-success"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
