import React from 'react';

import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div className="CharComponent">
      {props.letter}
    </div>
  )
}

export default charComponent;