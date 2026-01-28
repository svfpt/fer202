import React, { useState } from "react";

function Exercise3() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Tên sản phẩm: ${form.name}\nGiá: ${form.price}\nDanh mục: ${form.category}`
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Exercise 3 - Product Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Tên sản phẩm */}
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Giá */}
        <div className="mb-3">
          <label className="form-label">Giá</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Danh mục */}
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Lưu sản phẩm
        </button>
      </form>
    </div>
  );
}

export default Exercise3;
