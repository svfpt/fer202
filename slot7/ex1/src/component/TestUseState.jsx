import React, { useState } from "react";

function TestUseState() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const handleChange = () => {
    setResult(`Username: ${username}, Age: ${age}`);
  };

  return (
    <div className="container mt-4">
      <h3>Test useState</h3>

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleChange}>
        Change
      </button>

      {/* HIỂN THỊ KẾT QUẢ */}
      {result && (
        <div className="alert alert-success mt-3">
          {result}
        </div>
      )}
    </div>
  );
}

export default TestUseState;
