import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';


function AlertToast() {
  const [show, setShow] = useState(true);

  return (
    <Toast
    delay={3000}
    onClose={() => setShow(false)}
    show={show}
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
    autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
  );
}


export default AlertToast;