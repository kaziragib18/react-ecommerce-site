import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
      return (
            <div className="register__form">
                  <div>
                        <h2>Create Account</h2>
                        <form onSubmit="">
                              <input type="email" name="" id="" placeholder="Your email" />
                              <br />
                              <input type="password" name="" id="" placeholder="Enter password" />
                              <br />
                              <input type="password" name="" id="" placeholder="Confirm password" />
                              <br />
                              <input type="submit" value="Submit" />
                        </form>
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                  </div>
            </div>
      );
};

export default Register;