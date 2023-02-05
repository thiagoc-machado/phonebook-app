import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { NavLink, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    <NavLink to={'/'}/>;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <NavLink to={'/'} className='text-light'>
              <i className='fa fa-mobile text-light p-1' />
              Phone<b>Book</b>
            </NavLink>
          </Typography>
          {isLoggedIn ? (
            <Button
              variant='contained'
              className='MuiButton-containedDanger'
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <NavLink to={'/login'}>
            <Button variant='contained' className='MuiButton-containedSuccess'>
              Login
            </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
