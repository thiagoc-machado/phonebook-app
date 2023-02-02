import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner';
let ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: '',
  });

  // useEffect(async () => {
  //   try {
  //     setState({ ...state, loading: true });

  //     let response = await ContactService.getAllContacts();
  //     console.log(response.data);
  //     setState({
  //       ...state,
  //       loading: false,
  //       contacts: response.data,
  //     });
  //   } catch (error) {
  //     setState({
  //       ...state,
  //       loading: false,
  //       errorMessage: error.message,
  //     });
  //   }
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        // console.log(response.data),
        setState({
          ...state,
          loading: false,
          contacts: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    fetchData();
  }, []);

  let { loading, contacts, errorMessage } = state;

  return (
    <React.Fragment>
      <section className='contact-search p-3'>
        <div className='container'>
          <div className='grid'>
            <div className='row'>
              <div className='col'>
                <p className='h3 fw-bold'>
                  Contact Manager
                  <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                    <i className='fa fa-plus-circle me-2' />
                    New
                  </Link>
                </p>
                <p className='fst-italic'>lorem</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <form className='row'>
                  <div className='col'>
                    <div className='mb-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search names'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-2'>
                      <input
                        type='submit'
                        className='btn btn-outline-dark'
                        value='Search'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className='contact-list'>
            <div className='container'>
              <div className='row'>
                {contacts.length > 0 &&
                  contacts.map((contacts) => {
                    return (
                      <div className='col-md-6' key={contacts.id}>
                        <div className='card my-2'>
                          <div className='card-body'>
                            <div className='row align-items-center d-flex justify-content-around'>
                              <div className='col-md-4'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='16'
                                  height='16'
                                  fill='currentColor'
                                  className='bi bi-person contact-img'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                                </svg>
                              </div>
                              <div className='col-md-7'>
                                <ul className='list-group'>
                                  <li className='list-group-items list-group-item-action'>
                                    Name :{' '}
                                    <span className='fw-bold'>{contacts.name}</span>
                                  </li>
                                  <li className='list-group-items list-group-item-action'>
                                    Mobile :{' '}
                                    <span className='fw-bold'>{contacts.mobile}</span>
                                  </li>
                                  <li className='list-group-items list-group-item-action'>
                                    Phone :{' '}
                                    <span className='fw-bold'>{contacts.phone}</span>
                                  </li>
                                </ul>
                              </div>
                              <div className='col-md-1 d-flex flex-column align-items-center'>
                                <Link
                                  to={`/contacts/view/${contacts.id}`}
                                  className='btn btn-warning my-1'
                                >
                                  <i className='fa fa-eye' />
                                </Link>
                                <Link
                                  to={'/contacts/edit/:contactId'}
                                  className='btn btn-primary my-1'
                                >
                                  <i className='fa fa-pen' />
                                </Link>
                                <button className='btn btn-danger'>
                                  <i className='fa fa-trash' />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContactList;
