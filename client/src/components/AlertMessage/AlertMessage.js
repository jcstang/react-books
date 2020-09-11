import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
  const isMessageDisplayed = props.visible;
  const messageText = props.message;
  // const [showMessage, setShowMessage] = useState(false);

  if (isMessageDisplayed) {
    return (
      <Alert
        variant={props.variant}
        style={{
          // postion: 'absolute',
          // position: 'absolute',
          // top: 0,
          // zIndex: -10,
          // right: 0,
          position: '-webkit-sticky',
          position: 'sticky',
          // position: 'absolute',
          top: 0,
          zIndex: 2,
        }}
      >
        {messageText}
      </Alert>
    );
    
  } else {

    return null;
  }
}

export default AlertMessage;