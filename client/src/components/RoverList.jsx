import React from 'react';
import Rover from './Rover.jsx';

var RoverList = (props) => {
  const marsRovers = props.rovers;
  const rovers = marsRovers.map((marsRover) =>
    <Rover key={marsRover.id} rover={marsRover} />
  );

  return (
    <div>
      {console.log('RoverList: ', rovers)}
      {rovers}
    </div>
  );
};

export default RoverList;