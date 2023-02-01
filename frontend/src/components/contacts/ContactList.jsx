import React from 'react';
import { Link } from 'react-router-dom';
let ContactList = () => {
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
      <section className='contact-list'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row align-items-center d-flex justify-content-around'>
                    <div className='col-md-4'>
                      <img
                        src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
                        alt=''
                        className='contact-img'
                      />
                    </div>
                    <div className='col-md-7'>
                      <ul className='list-group'>
                        <li className='list-group-items list-group-item-action'>
                          Name : <span className='fw-bold'>Thiago</span>
                        </li>
                        <li className='list-group-items list-group-item-action'>
                          Mobile : <span className='fw-bold'>897984231</span>
                        </li>
                        <li className='list-group-items list-group-item-action'>
                          Phone : <span className='fw-bold'>9784515312</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-1 d-flex flex-column align-items-center'>
                      <Link to={'/contacts/view/:contactId'} className='btn btn-warning my-1'>
                        <i className='fa fa-eye'/>
                      </Link>
                      <Link to={'/contacts/edit/:contactId'} className='btn btn-primary my-1'>
                        <i className='fa fa-pen'/>
                      </Link>
                      <button className='btn btn-danger'>
                        <i className='fa fa-trash'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
