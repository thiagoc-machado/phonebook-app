import React from 'react';

let Spinner = () => {
  return (
    <React.Fragment>
      <div className='spinner-grow d-block m-auto' style={{width:'100px', height:'100px'}} role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
