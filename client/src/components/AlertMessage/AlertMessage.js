import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
  const isMessageDisplayed = props.visible;

  if (isMessageDisplayed) {
    return (
      <Alert
        variant={props.variant} 
        style={{
          // postion: 'absolute',
          position: 'sticky',
          top: 0,
          zIndex: -1
          // right: 0,
        }}
      >
        Book successfully saved!
      </Alert>
    );
    
  } else {

    return null;
  }
}

export default AlertMessage;