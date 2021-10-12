import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
      const { signInUsingGoogle } = useAuth();

      return (
            <div className="login__form">
                  <div>
                        <h2>Login</h2>
                        <form onSubmit="">
                              <input type="email" name="" id="" placeholder="Your email" />
                              <br />
                              <input type="password" name="" id="" placeholder="Your password" />
                              <br />
                              <input type="submit" value="Submit" />
                        </form>
                        <p>new to Panda Shop? <Link to="/register">Create Account</Link></p>
                        <div>------- or ------</div>
                        <button className="product__button"
                        onClick={signInUsingGoogle}>Google Sign In</button>
                  </div>
            </div>
      );
};

export default Login;