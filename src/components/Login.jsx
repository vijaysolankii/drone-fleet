import React, { useState } from "react";
import data from '../data/data.json'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = data.users.find(u => u.username === username && u.password === password)
    if(user){
      setMessage('Login Successfull');
      navigate('/dashboard')
      console.log('success')
    } else {
      setMessage('Please enter valid credentials')
      console.log('error')
    }
  }

  
  return <div className="login-screen">
    <div className="container">
      <h1>Login</h1>
      <div className="card">
      <form onSubmit={handleLogin}>
        <input type="text" name="uname" id="uname" value={username} onChange={ (e) => setUsername(e.target.value)} required placeholder="Enter Username" />
        <input type="password" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} required placeholder="Enter Password" />
        <input type="submit" value="Submit" className="btn" />
      </form>
      </div>

      {
        message === "" ? "" : (<div className="notification">{message && <div>{message}</div>}</div>)
      }
    </div>
  </div>;
};

export default Login;
