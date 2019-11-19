import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../dist/style.css';

var rovers = [
  {
    cameras: [
      { name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
      { name: 'NAVCAM', fullName: 'Navigation Camera' },
      { name: 'MAST', fullName: 'Mast Camera' },
      { name: 'CHEMCAM', fullName: 'Chemistry and Camera Complex' },
      { name: 'MAHLI', fullName: 'Mars Hand Lens Imager' },
      { name: 'MARDI', fullName: 'Mars Decent Imager' },
      { name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' }
    ],
    id: 5,
    name: 'Curiosity',
    landingDate: '2012-08-06',
    launchDate: '2011-11-26',
    maxDate: '2019-09-28',
    maxSol: 2540,
    status: 'active',
    totalPhotos: 366206
  },
  {
    cameras: [
      { name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
      { name: 'NAVCAM', fullName: 'Navigation Camera' },
      { name: 'PANCAM', fullName: 'Panoramic Camera' },
      { name: 'MINITES', fullName: 'Miniature Thermal Emission Spectrometer' },
      { name: 'ENTRY', fullName: 'Entry, Descent, and Landing Camera' },
      { name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' }
    ],
    id: 7,
    name: 'Spirit',
    landingDate: '2004-01-04',
    launchDate: '2003-06-10',
    maxDate: '2010-03-21',
    maxSol: '2208',
    status: 'complete',
    totalPhotos: 124550
  },
  {
    cameras: [
      { name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
      { name: 'NAVCAM', fullName: 'Navigation Camera' },
      { name: 'PANCAM', fullName: 'Panoramic Camera' },
      { name: 'MINITES', fullName: 'Miniature Thermal Emission Spectrometer' },
      { name: 'ENTRY', fullName: 'Entry, Descent, and Landing Camera' },
      { name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' }
    ],
    id: 6,
    name: 'Opportunity',
    landingDate: '2004-01-25',
    launchDate: '2003-07-07',
    maxDate: '2018-06-11',
    maxSol: '5111',
    status: 'complete',
    totalPhotos: 198439
  }
];

ReactDOM.render(<App time={Date.now()} rovers={rovers}/>, document.getElementById('app'));