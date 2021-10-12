import React from 'react';
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo-2.PNG';
import './Header.css';

const Header = () => {
      const { user, logOut } = useAuth();

      return (
            <div className="header">
                  <img className="logo" src={logo} alt="" />
                  <nav>
                        <NavLink to="/shop"
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
                        {user.email &&
                              <span style={{ color: 'white' }}>Hello {user.displayName} </span>
                        }

                        {
                              user.email ?
                                    <button onClick={logOut}>log out</button> :
                                    <NavLink to="/login"
                                          activeStyle={{
                                                fontWeight: "bold",
                                                color: "black"
                                          }}>
                                          Login</NavLink>
                        }
                  </nav>
            </div>
      );
};

export default Header;