import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ImageZoom = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <img loading='lazy' style={{ width: '100%' }} src={props.img} onError={(e) => { e.target.src = '/img/productos/default.webp'; }} alt='la ganadera' />
      </Modal.Body>
    </Modal>
  );
};

export default ImageZoom;
