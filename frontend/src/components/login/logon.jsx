import './login.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactService } from '../../services/ContactService';

let Logon = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    passwordValid: true,
  });

  let updateInput = (event) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.createUser(state.user);
      if (response) {
        navigate('/users/list', { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate('/users/add', { replace: false });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      user: {
        ...state.user,
        [name]: value,
      },
      passwordValid:
        name === 'rPassword'
          ? state.user.password === value
          : state.passwordValid,
    });
  };
  let { loading, user, errorMessage } = state;

  return (
    <React.Fragment>
      <section className=' Auth-form-container'>
        <div className='Auth-form'>
          <div className='row'>
            <div className='col'>
              <p className='Auth-form-title '>Create User</p>
              <p className='fst-italic'></p>
            </div>
          </div>
          <div className='Auth-form-title'>
            <div className=''>
              <form onSubmit={submitForm}>
                <div className='Auth-form-content'>
                  <div className='mb-2'>
                    <input
                      required={true}
                      name='firstName'
                      value={user.firstName}
                      onChange={updateInput}
                      type='text'
                      className='form-control'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      required={true}
                      name='lastName'
                      value={user.lastName}
                      onChange={updateInput}
                      type='text'
                      className='form-control'
                      placeholder='Last Name'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      required={true}
                      name='email'
                      value={user.email}
                      onChange={updateInput}
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      required={true}
                      name='password'
                      value={user.password}
                      onChange={updateInput}
                      type='password'
                      className='form-control'
                      placeholder='Password'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      required={true}
                      name='rPassword'
                      value={state.rPassword}
                      onChange={handleInputChange}
                      type='password'
                      className={`form-control ${
                        !state.passwordValid ? 'is-invalid' : ''
                      }`}
                      placeholder='Confirm Password'
                    />
                    {!state.passwordValid && (
                      <div className='invalid-feedback'>
                        As senhas não são iguais
                      </div>
                    )}
                  </div>
                  <div className='mb-2'>
                    <input
                      type='submit'
                      className='btn btn-success'
                      value='Create'
                      // disabled={user.password !== state.rPassword}
                    />
                    <Link to={'/login'} className='btn btn-dark ms-2'>
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Logon;
