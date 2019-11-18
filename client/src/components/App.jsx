import React from 'react';
import Axios from 'axios';
import nasaApi from '../../../NASA_KEY.js';
import Apod from './Apod.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
      issPosition: {},
      curiosity: {},
      spirit: {},
      opportunity: {},
      people: []
    };
    this.getApod = this.getApod.bind(this);
    this.getIssPosition = this.getIssPosition.bind(this);
    this.getCuriosityInfo = this.getCuriosityInfo.bind(this);
    this.getSpiritInfo = this.getSpiritInfo.bind(this);
    this.getOpportunityInfo = this.getOpportunityInfo.bind(this);
    this.getPeople = this.getPeople.bind(this);
  }

  // get nasa astronomy image of the day
  getApod() {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaApi}`)
      .then((res) => {
        // console.log('APOD call: ', res.data);
        this.setState({
          apod: res.data
        });
      });
  }

  getIssPosition() {
    Axios.get('http://api.open-notify.org/iss-now.json')
      .then((res) => {
        // console.log('ISS call: ', res.data);
        this.setState({
          issPosition: res.data.iss_position
        });
      });
  }

  getCuriosityInfo() {
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=${nasaApi}`)
      .then((res) => {
        // console.log('CURIOSITY call: ', res.data.rover);
        this.setState({
          curiosity: res.data.rover
        });
      });
  }

  getSpiritInfo() {
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit?api_key=${nasaApi}`)
      .then((res) => {
        // console.log('SPIRIT call: ', res.data.rover);
        this.setState({
          spirit: res.data.rover
        });
      });
  }

  getOpportunityInfo() {
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity?api_key=${nasaApi}`)
      .then((res) => {
        // console.log('OPPORTUNITY call: ', res.data.rover);
        this.setState({
          opportunity: res.data.rover
        });
      });
  }

  getPeople() {
    Axios.get('http://api.open-notify.org/astros.json')
      .then((res) => {
        // console.log('PEOPLE call: ', res.data.people);
        this.setState({
          people: res.data.people
        });
      });
  }

  componentDidMount() {
    this.getApod();
    // this.getIssPosition();
    // this.getCuriosityInfo();
    // this.getSpiritInfo();
    // this.getOpportunityInfo();
    // this.getPeople();
  }

  render() {
    return (
      <div>
        {console.log('APOD: ', this.state.apod)}
        {/* {console.log('Iss Position: ', this.state.issPosition)} */}
        {/* {console.log('CURIOSITY: ', this.state.curiosity)} */}
        {/* {console.log('SPIRIT: ', this.state.spirit)} */}
        {/* {console.log('OPPORTUNITY: ', this.state.opportunity)} */}
        {/* {console.log('PEOPLE: ', this.state.people)} */}
        <Apod apod={this.state.apod} />
      </div>
    );
  }
}

export default App;