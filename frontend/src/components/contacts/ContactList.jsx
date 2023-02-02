import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner';

let ContactList = () => {
  let [query, setQuery] = useState({
    text: '',
  });

  let [state, setState] = useState({
    loading: false,
    contacts: [],
    filteredContacts: [],
    errorMessage: '',
  });

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
          filteredContacts: response.data,
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

  let clickDelete = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        let response = await ContactService.deleteContact(contactId);
        if (response) {
          setState({ ...state, loading: true });
          let response = await ContactService.getAllContacts();
          setState({
            ...state,
            loading: false,
            contacts: response.data,
            filteredContacts: response.data,
          });
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
  };

  let searchContacts = (event) => {
    setQuery({ ...query, text: event.target.value });
    let theContacts = state.contacts.filter((contacts) => {
      return contacts.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({
      ...state,
      filteredContacts: theContacts,
    });
  };

  let { loading, contacts, errorMessage, filteredContacts } = state;

  return (
    <React.Fragment>
      <pre>{query.text}</pre>
      <section className='contact-search p-3'>
        <div className='container'>
          <div className='grid top-blk'>
            <div className='row'>
              <div className='col'>
                <p className='h3 fw-bold'>
                  <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                    <i className='fa fa-plus-circle me-2' />
                    New
                  </Link>
                </p>
                <p className='fst-italic'></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <form className='row'>
                  <div className='col'>
                    <div className='mb-2 search-blk'>
                      <input
                        name='text'
                        value={query.text}
                        onChange={searchContacts}
                        type='text'
                        className='form-control '
                        placeholder='Search names'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-2'>
                      {/* <input
                        type='submit'
                        className='btn btn-outline-dark'
                        value='Search'
                      /> */}
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
                {filteredContacts.length > 0 &&
                  filteredContacts.map((contacts) => {
                    return (
                      <div className='col-md-6' key={contacts.id}>
                        <div className='card my-2'>
                          <div className='card-body'>
                            <div className='row align-items-center d-flex justify-content-around'>
                              <div className='card-blk1'>
                                <div className='col-md-4 '>
                                  <svg
                                    fill='currentColor'
                                    className='bi bi-person contact-img'
                                    viewBox='0 0 16 16'
                                  >
                                    <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                                  </svg>
                                </div>
                                <div className='col-md-7 card-blk2'>
                                  <ul className='list-group '>
                                    <li className='list-group-items list-group-item-action '>
                                      Name :{' '}
                                      <span className='fw-bold'>
                                        {contacts.name}
                                      </span>
                                    </li>
                                    <li className='list-group-items list-group-item-action'>
                                      Mobile :{' '}
                                      <span className='fw-bold'>
                                        {contacts.mobile}
                                      </span>
                                    </li>
                                    <li className='list-group-items list-group-item-action'>
                                      Phone :{' '}
                                      <span className='fw-bold'>
                                        {contacts.phone}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-1  card-list'>
                                  <Link
                                    to={`/contacts/view/${contacts.id}`}
                                    className='btn btn-warning my-1'
                                  >
                                    <i className='fa fa-eye' />
                                  </Link>
                                  <Link
                                    to={`/contacts/edit/${contacts.id}`}
                                    className='btn btn-primary my-1'
                                  >
                                    <i className='fa fa-pen' />
                                  </Link>
                                  <button
                                    className='btn btn-danger my-1'
                                    onClick={() => clickDelete(contacts.id)}
                                  >
                                    <i className='fa fa-trash' />
                                  </button>
                                </div>
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
