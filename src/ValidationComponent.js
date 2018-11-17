import React from 'react';

const validationComponent = (props) => {
  let lengthMessage = 'Text too short';

  if (props.length >= 5) {
    lengthMessage = 'Text long enough';
  }

  return (
    <div>
      <p>{lengthMessage}</p>
    </div>
  )
}

export default validationComponent;