import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo-2.PNG';
import './Header.css';

const Header = () => {
      return (
            <div className="header">
                  <img className="logo" src={logo} alt="" />
                  <nav>
                        <NavLink  to="/shop"
                        activeStyle={{
                              fontWeight: "bold",
                              color: "black"
                            }}>
                                  Shop</NavLink>
                        <NavLink to="/review"
                        activeStyle={{
                              fontWeight: "bold",
                              color: "black"
                            }}>
                                  Order Review</NavLink>
                        <NavLink to="/inventory"
                        activeStyle={{
                              fontWeight: "bold",
                              color: "black"
                            }}>
                                  Inventory</NavLink>
                  </nav>
            </div>
      );
};

export default Header;