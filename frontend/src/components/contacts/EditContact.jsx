import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner';

let EditContact = () => {
  let navigate = useNavigate();
  let { contactId } = useParams();
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: '',
      phone: '',
      mobile: '',
      email: '',
      company: '',
      title: '',
      groupId: '',
    },
    groups: {},
    errorMessage: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getContact(contactId);
        let groupResponse = await ContactService.getGroups();
        setState({
          ...state,
          loading: false,
          contact: response.data,
          groups: groupResponse.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    };

    fetchData();
  }, [contactId]);

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate('/contacts/list', { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  let { loading, contact, groups, errorMessage } = state;

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className='add-contact p-3'>
            <div className='containers'>
              <div className='row'>
                <div className='col'>
                  <p className='h4 text-primary fw-bold'>Edit Contact</p>
                  <p className='fst-italic'></p>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-md-4'>
                  <form onSubmit={submitForm}>
                    <div className='mb-2'>
                      <input
                        required={true}
                        name='name'
                        value={contact.name}
                        onChange={updateInput}
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div className='mb-2'>
                      <input
                        required={true}
                        name='phone'
                        value={contact.phone}
                        onChange={updateInput}
                        type='number'
                        className='form-control'
                        placeholder='Phone'
                      />
                    </div>
                    <div className='mb-2'>
                      <input
                        required={true}
                        name='mobile'
                        value={contact.mobile}
                        onChange={updateInput}
                        type='number'
                        className='form-control'
                        placeholder='Mobile'
                      />
                    </div>
                    <div className='mb-2'>
                      <input
                        required={true}
                        name='email'
                        value={contact.email}
                        onChange={updateInput}
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div className='mb-2'>
                      <input
                        required={true}
                        name='company'
                        value={contact.company}
                        onChange={updateInput}
                        type='text'
                        className='form-control'
                        placeholder='Company'
                      />
                    </div>
                    <div className='mb-2'>
                      <input
                        type='text'
                        required={true}
                        name='title'
                        value={contact.title}
                        onChange={updateInput}
                        className='form-control'
                        placeholder='Title'
                      />
                    </div>
                    <div
                      className='mb-2'
                      required={true}
                      name='mobile'
                      value={contact.mobile}
                      onChange={updateInput}
                    >
                      <select
                        className='form-control'
                        required={true}
                        name='groupId'
                        value={contact.groupId}
                        onChange={updateInput}
                      >
                        <option value=''>Select a Group</option>
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className='mb-2'>
                      <input
                        type='submit'
                        className='btn btn-primary'
                        value='Update'
                      />
                      <Link to={'/contacts/list'} className='btn btn-dark ms-2'>
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className='col-md-6'>
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
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditContact;
