import React from 'react';
import './Login.css';
import { ImWarning } from "react-icons/im";

function Login() {
      return(
            <div className="login">
                  <h2>Sign in</h2>
                  <div className="loginContainer">
                        <form action="login" method="post">
                              <div className="username">
                                    <input type="text" placeholder='Username' name='username' required />
                              </div>
                              <div className="password">
                                    <input type="password" placeholder='Password' name='password' required />
                              </div>
                              <button type='submit'>Sign in</button>
                              <span> <ImWarning /> <br />Sign in feature only for <a href="http://twitter.com/azzmmii" target="_blank" rel="noopener noreferrer">Azmi.</a></span>
                        </form>
                  </div>
            </div>
      )
}

export default Login;