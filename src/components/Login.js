import React, { useState } from "react";
import './User.css';


async function loginUser() {
  return fetch('http://localhost/FakeDB_Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  }).then((data) => data.json());
  }

  function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      loginUser().then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(data.success);
          setUser('');
          setPassword('');
          setSubmit(!false);
        }
      }
      );
    }

    const handleChange = (e) => {
      if (e.target.name === 'user') {
        setUser(e.target.value);
      } else if (e.target.name === 'password') {
        setPassword(e.target.value);
      }
    }

    return (
      <div className="Login">
        <h2>Login</h2>
        <div className="Login-form">
          <form onSubmit={handleSubmit}>
            <div className="Login-form-input">
              <label htmlFor="user">Username</label>
              <input type="text" name="user" id="user" value={user} onChange={handleChange} />
            </div>
            <div className="Login-form-input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={handleChange} />
            </div>
            <div className="Login-form-submit">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
        <div className="Login-error">
          {error}
        </div>
        <div className="Login-success">
          {success}
        </div>
        <div className="Login-success">
          {submit}
        </div>
      </div>
    );
  }

  export default Login;