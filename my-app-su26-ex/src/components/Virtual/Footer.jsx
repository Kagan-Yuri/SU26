import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-3 d-flex align-items-center justify-content-between mt-4">
      <div className="bg-white text-dark px-3 py-1 rounded" style={{ fontSize: '14px' }}>
        AnhTTV20 © 2023
      </div>
      <div className="d-flex gap-3" style={{ fontSize: '14px' }}>
        <Link className="text-white text-decoration-none" to="/home">Home</Link>
        <Link className="text-white-50 text-decoration-none" to="/about">About</Link>
        <Link className="text-white-50 text-decoration-none" to="/blog">Blog</Link>
        <Link className="text-white-50 text-decoration-none" to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;