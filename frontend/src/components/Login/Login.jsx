import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../App';
import { authService } from '../../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    try {
      const response = await authService.login(username, password);
      setMessage(response.data.message);
      if (response.data.message === 'Login successful') {
        setIsAuthenticated(true);
        navigate('/admin');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
              aria-label="Username"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              aria-label="Password"
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Connexion...' : 'Login'}
          </button>
        </form>
        {message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
      </div>
    </section>
  );
};

export default Login;
