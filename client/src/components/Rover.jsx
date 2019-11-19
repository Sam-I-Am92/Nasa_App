import React from 'react';

var Rover = (props) => {
  return (
    <div>
      {console.log('Rover Component: ', props)}
      <h2>Rover: {props.rover.name}</h2>
      <h4>Mission Status: {props.rover.status}</h4>
      <h4>Launch Date: {props.rover.launchDate}</h4>
      <h4>Landing Date: {props.rover.landingDate}</h4>
    </div>
  );
};

export default Rover;