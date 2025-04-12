// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-white text-dark fw-bold text-center py-3 fixed-bottom">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Created by Rami Ibrahim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
