import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex align-items-center">

        {/* Avatar */}
        <img
          src="/images/m1.jpg"
          alt="Avatar"
          width="80"
          height="80"
          className="rounded-circle me-3 border"
        />

        {/* Info */}
        <div>
          <h6 className="mb-1">Nguyễn Thành Nhân</h6>
          <p className="mb-0">📧 nhannt@fpt.edu.vn</p>
          <small className="text-secondary">
            © 2026 Pizza House. All rights reserved.
          </small>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
