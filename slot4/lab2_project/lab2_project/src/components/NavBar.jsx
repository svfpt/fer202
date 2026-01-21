import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold text-danger">
          🍕 Pizza House
        </span>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <span className="nav-link">Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">About</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Contact</span>
          </li>
        </ul>

        <input
          className="form-control w-25"
          placeholder="Search pizza..."
        />
      </div>
    </nav>
  );
}

export default NavBar;
