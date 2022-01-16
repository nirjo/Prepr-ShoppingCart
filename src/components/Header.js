import React from 'react';
import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import Cart from './pages/Cart';
import Login from './pages/Login';

const Header = (props) => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{ height: 40 }}
      className="block row center"
    >
      <div>
        <a href="#/">
          <h1>Prepr-Shopping Cart</h1>
        </a>
      </div>
      <div></div>
    </Navbar>
  );
};
export default Header;
