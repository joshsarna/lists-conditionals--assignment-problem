import React from 'react';

const validationComponent = (props) => {
  return (
    <div>
      <p>Text Length Message</p>
      <p>{props.length}</p>
    </div>
  )
}

export default validationComponent;