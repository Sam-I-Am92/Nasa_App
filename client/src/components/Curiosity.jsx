import React from 'react';

var Curiosity = (props) => {
  return (
    <div>
      <h3>Curiosity Info:</h3>
      <h4>Status: {props.curiosity.status}</h4>
    </div>
  );
};

export default Curiosity;