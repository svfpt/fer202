import React from 'react';

function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Pizza House. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
