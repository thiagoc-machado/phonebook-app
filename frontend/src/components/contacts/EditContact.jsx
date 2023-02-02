import React from 'react';
import { Link } from 'react-router-dom';

let EditContact = () => {
  return (
    <React.Fragment>
      <section className='add-contact p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-primary fw-bold'>Edit Contact</p>
              <p className='fst-italic'>Loren</p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <form>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Phone'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Mobile'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Company'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Title'
                  />
                </div>
                <div className='mb-2'>
                  <select className='form-control'>
                    <option value=''>Select a Group</option>
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
  );
};

export default EditContact;
