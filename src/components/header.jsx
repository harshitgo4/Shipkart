import React from 'react';
import { Link } from 'react-router-dom';
//import { Link as ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
      <h1>Shipkart</h1>
      <main>
        <HashLink to="/#home" smooth={true} offset={-50} duration={500}>
          Home
        </HashLink>
        <Link  to="/contact">
          Contacts
        </Link>
        <HashLink to="/#about" smooth={true} offset={-50} duration={500}>
          About
        </HashLink>
        <HashLink smooth to="/#brand">
          Brands
        </HashLink>
        <HashLink to="/service" smooth={true} offset={-50} duration={500}>
          Services
        </HashLink>
      </main>
    </nav>
  );
};

export default Header;
