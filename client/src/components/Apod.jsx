import React from 'react';

var Apod = (props) => {
  return (
    <div>
      <h2>Astronomy Picture of the Day</h2>
      <h3>Title: {props.apod.title}</h3>
      <img className="apodImage" src={props.apod.url} alt={props.apod.title} /> 
      {/* <video controls>
        <source src={props.apod.url} />
        <source src={props.apod.url} type="video/mp4" />
      </video> */}
      <p>{props.apod.explanation}</p>
    </div>
  );
};

export default Apod;