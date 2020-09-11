import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';


function AlertToast() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <Toast
    delay={3000}
    onClose={() => setShowMessage(false)}
    show={showMessage}
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
    autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto"></strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
  );
}


export default AlertToast;