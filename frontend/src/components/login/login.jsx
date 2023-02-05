import './login.css'

import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../services/UserService';

const Login = () => {
  const { loginThunk } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigateTo = useNavigate();

  const { username, password } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div className='Auth-form-container'> 
      <form className='Auth-form'>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className=' '>
            <label >Email address</label>
            <input
              type='email'
              className='form-control mt-1'
              placeholder='Enter email'
              required
              value={username}
              name='username'
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input
              required
              name='password'
              type='password'
              className='form-control mt-1'
              placeholder='Enter password'
              value={password}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <div className='d-grid gap-2 mt-3'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={(e) => {
                e.preventDefault();
                loginThunk(formState.username, formState.password)
                  .then(() => {
                    navigateTo('/contacts/list')
                  })
                  .catch(() => {
                    setError(
                      <p className='alert alert-danger p-0'>
                        Invalid username or password.
                      </p>
                    );
                  });
              }}
            >
              Submit
            </button>
          </div>
          <p className='forgot-password text-right mt-2'>
            Don't have an account? <a href='/logon'>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
