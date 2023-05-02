import React from 'react';

const NotFound = () => {
  return (
    <>
      <div id='notFound'>
        <div class='fof'>
          <h1>Error 404</h1>
          <br />
          <span>Página no encontrada😔</span>
          <br />
          <a style={{ color: 'brown' }} href='/'>Volver al inicio</a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
