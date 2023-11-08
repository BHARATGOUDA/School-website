import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    useEffect(()=>{axios.get('http://localhost:3000/Admin')
    .then((m)=>{
        setData(m.data)})
      .catch()},[])
  const handleSubmit =(e) => {
    e.preventDefault();
    const user = data.find((data) => {
        return data.email === email && data.Set_Password === password;});
        if (user){alert("Login successful ")} else alert("Login failed") };
  return (
    <div className='out'>
        <div className="parent-login-container">
            <h1>Parent Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email "/>
                </div><div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password "/>
                </div> <div ><button type="submit" className="btn btn-outline-success">Login</button>
                </div> </form> </div></div>);}
export default Login;
