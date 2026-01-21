import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Pizza House</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#menu">Thực đơn</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Liên hệ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
