import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
      const { signInUsingGoogle } = useAuth();
      const location = useLocation();
      const history = useHistory();
      const redirect_url = location.state?.from || '/shop';


      const handleGoogleLogin= () =>{
            signInUsingGoogle()
            .then(result =>{
                  history.push(redirect_url);
            })
      }

      return (
            <div className="login__form">
                  <div>
                        <h2>Login</h2>
                        <form>
                              <input type="email" name="" id="" placeholder="Your email" />
                              <br />
                              <input type="password" name="" id="" placeholder="Your password" />
                              <br />
                              <input type="submit" value="Submit" />
                        </form>
                        <p>New to Panda shop website? <Link to="/register">Create Account</Link></p>
                        <div>------- or ------</div>
                        <button className="product__button"
                        onClick={handleGoogleLogin}>Google Sign In</button>
                  </div>
            </div>
      );
};

export default Login;