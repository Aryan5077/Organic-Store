import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-top">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png"
            alt="Footer logo"
            className="footer-image"
          />
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      <div className="footer-right">
        <div className="footer-headings-top">
          <h1>quick links</h1>
          <h2>Download Our Mobile App</h2>
        </div>
        <div className="footer-headings-bottom">
          <h1>Site Links</h1>
          <h2>Quick Links</h2>
        </div>
      </div>
        <div className="footer-content">
          <p>&copy; 2024 Furniture Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;