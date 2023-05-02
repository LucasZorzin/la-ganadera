/* eslint-disable operator-linebreak */
import React from 'react';

const Loader = ({ loading }) => {
  return (
    <>
      {
        loading === true ?
          <div id='loader' className='d-flex justify-content-center'>
            <img src='/la-ganadera.webp' alt='La Ganadera - Logo' width={100} height='auto' />
          </div>
          : null
      }
    </>
  );
};

export default Loader;
