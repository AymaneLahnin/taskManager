import React, { useState } from 'react';
import "../AuthForm.css";
import { useNavigate } from 'react-router-dom';
import Auth from '../api/Auth';                               

const AuthForm = ({ handleAuthentication }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await Auth('signin', { username, password });
      if (response.status === 200) {
        handleAuthentication(true);
        const userId=response.data.id
        localStorage.setItem('userId',userId)
        navigate(`/tasks/user/${userId}`);
        alert("Sign in successful!");
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await Auth('signup',{username,password});
      console.log('Sign-up response status:', response.status);
      if (response.status === 200) {
        const userId=response.data.id
        localStorage.setItem('userId',userId)
        console.log(userId)
        handleAuthentication(true);
        navigate(`/tasks/user/${userId}`);
        alert("Sign up successful!");
      }
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <div className='bd'>
        <div className={`container2 ${!isSignUp ? 'active' : ''}`} id="container2">
            <div className="form-container sign-up">
              <form onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <div className="social-icons">
                  <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your username for registration</span>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in">
              <form onSubmit={handleSignIn}>
                <h1>Sign In</h1>
                <div className="social-icons">
                  <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your username and password</span>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                <div className="toggle-panel toggle-left">
                  <h1>Welcome Back!</h1>
                  <p>Enter your username and password to use all of site features</p>
                  <button className={!isSignUp ? 'hidden' : ''} onClick={handleToggle}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                  <h1>Hello, Friend!</h1>
                  <p>Register with your username and password to use all of site features</p>
                  <button className={isSignUp ? 'hidden' : ''} onClick={handleToggle}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
    </div>
    
  );
};

export default AuthForm;
