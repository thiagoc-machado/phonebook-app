import React from 'react';
import { Button, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-box'>
      <div className='container'>
        <div className='main'></div>
        <div className='home-title'>
          <a>
            "Organize your contacts and turn every call into an opportunity to
            connect, grow, and achieve great things."
          </a>
        </div>
        <div className='box-r'>
          <ul>
            <li>Free site for personal or professional use</li>
            <li>Save phone numbers, cell phone, emails</li>
            <li>Use to backup your contacts and access from anywhere</li>
            <li>Use to register your clients and manage your company</li>
            <li>Simple, secure, fast and very easy to use site</li>
          </ul>
          <div className='call'>
          <NavLink to={'/logon'}>
            <Button variant='contained' color='success'>
              Sign up for free
            </Button>
              </NavLink>
            <br/>
            <NavLink to={'/login'}>Already registered? Log in...</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
