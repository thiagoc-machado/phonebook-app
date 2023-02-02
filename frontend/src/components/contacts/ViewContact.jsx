import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner';

let ViewContact = () => {
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: '',
    group: {},
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({
          ...state,
          loading: true,
        });
        let response = await ContactService.getContact(contactId);
        let groupResponse = await ContactService.getGroup(response.data);
        setState({
          ...state,
          loading: false,
          contact: response.data,
          group: groupResponse.data,
        });
      } catch (error) {
        setState({
          ...setState,
          errorMessage: error.message,
        });
      }
    }
    fetchData();
  }, [contactId]);

  let { loading, contact, errorMessage, group } = state;
  return (
    <React.Fragment>
      <section className='view-contact-intro p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h3 text-warning fw-bold'>ViewContact</p>
              <p className='fst-italic'>lorem</p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {Object.keys(contact).length > 0 && Object.keys(group).length > 0 && (
            <section className='view-contact mt-3'>
              <div className='container'>
                <div className='row align-items-center'>
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
                  <div className='col-md-8'>
                    <ul className='list-group'>
                      <li className='list-group-items list-group-item-action'>
                        Name : <span className='fw-bold'>{contact.name}</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        Mobile :{' '}
                        <span className='fw-bold'>{contact.mobile}</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        Phone : <span className='fw-bold'>9784515312</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        email : <span className='fw-bold'>{contact.email}</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        Company :{' '}
                        <span className='fw-bold'>{contact.company}</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        Title : <span className='fw-bold'>{contact.title}</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        Group :{' '}
                        <span className='fw-bold'>{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <Link to={'/contacts/list'} className='btn btn-warning'>
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ViewContact;
