import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password }, { withCredentials: true });
      setMessage(response.data.message);
      if (response.data.message === 'Login successful') {
        setIsAuthenticated(true);
        navigate('/admin');
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data ? error.response.data.message : 'An error occurred';
      setMessage(errorMessage);
    }
  };

  return (
    <section className="mr">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='aaa'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </section>
  );
};

export default Login;
