import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="left-navbar">
        <ul>
        <li>
         <a href="/">
        <img
       src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
       alt="Logo"
       className="navbar-logo"
       />
       </a>
          </li>
          <li>
            <Link to="/Everything">Everything</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            <Link to="/juice">Juice</Link>
          </li>
        </ul>
      </nav>
      <nav className="right-navbar">
        <ul>
          <li className="about-link">
            <Link to="/about">About</Link>
          </li>
          <li className='contact-link'>
            <Link to="/contact">Contact</Link>
          </li>
          <li className='img-link'>
          <i className="fas fa-shopping-cart icon dark-icon"></i>
          </li>
          <li className='img2-link'>
          <i className="fas fa-user icon dark-icon"></i> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;