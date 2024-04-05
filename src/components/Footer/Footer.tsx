import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Company Name</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
