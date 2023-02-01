import React from 'react';
import { Link } from 'react-router-dom';

let ViewContact = () => {
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
      <section className='view-contact mt-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
                <img src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt='' className='contact-img'/>
            </div>
            <div className='col-md-8'>
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
                        <li className='list-group-items list-group-item-action'>
                          email : <span className='fw-bold'>9784515312</span>
                        </li>
                        <li className='list-group-items list-group-item-action'>
                          Company : <span className='fw-bold'>9784515312</span>
                        </li>
                        <li className='list-group-items list-group-item-action'>
                          Title : <span className='fw-bold'>9784515312</span>
                        </li>
                        <li className='list-group-items list-group-item-action'>
                          Group : <span className='fw-bold'>9784515312</span>
                        </li>
                      </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
                <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewContact;
