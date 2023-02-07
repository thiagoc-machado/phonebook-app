import { Password } from '@mui/icons-material';
import axios from 'axios';
import React, { useReducer } from 'react';
import { authReducer, LOGIN } from './components/redicers/authReducer';
import Routers from './routers/routers';

import { AuthContext } from './services/UserService';

let App = () => {
  const [data, dispatch] = useReducer(authReducer, {
    token: localStorage.getItem('token'),
  });

  const loginThunk = async (username, password) => {
    const res = await axios.post('http://localhost:8000/auth/', {
      username: username,
      password: password,
    });
    dispatch({ type: LOGIN, token: res.data.token });
    localStorage.setItem('token', res.data.token);
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          data,
          loginThunk,
        }}
      >
        <Routers />
      </AuthContext.Provider>
    </>
  );
};

export default App;
