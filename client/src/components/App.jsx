import React from 'react';
import Axios from 'axios';
import nasaApi from '../../../NASA_KEY.js';
import Apod from './Apod.jsx';
// import RoverList from './RoverList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
      issPosition: {},
      rovers: [],
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
    this.getRovers = this.getRovers.bind(this);

    this.setRovers = this.setRovers.bind(this);
    this.setCuriosity = this.setCuriosity.bind(this);
    this.setSpirit = this.setSpirit.bind(this);
    this.setOpportunity = this.setOpportunity.bind(this);
  }

  // get all rover data
  getRovers() {
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${nasaApi}`)
      .then((res) => {
        console.log('ROVERS call: ', res.data.rovers);
        this.setState({
          rovers: res.data.rovers
        });
      });
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

  setRovers(props) {
    console.log('ROVERS list: ', this.props.rovers);
    this.setState({
      rovers: this.props.rovers
    });
  }

  setCuriosity(props) {
    // console.log('CURIOSITY PROPS: ', this.props.rover[0]);
    this.setState({
      curiosity: this.props.rovers[0]
    });
  }

  setSpirit(props) {
    // console.log('SPIRIT PROPS: ', this.props.rover[1]);
    this.setState({
      spirit: this.props.rovers[1]
    });
  }

  setOpportunity(props) {
    // console.log('OPPORTUNITY PROPS: ', this.props.rover[2]);
    this.setState({
      opportunity: this.props.rovers[2]
    });
  }

  componentDidMount() {
    // real data
    this.getApod();
    // this.getIssPosition();
    // this.getCuriosityInfo();
    // this.getSpiritInfo();
    // this.getOpportunityInfo();
    // this.getPeople();
    // this.getRovers();

    // fake data
    this.setRovers();
    this.setCuriosity();
    this.setSpirit();
    this.setOpportunity();
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
        {/* <Curiosity curiosity={this.state.curiosity} /> */}
        {/* <RoverList rovers={this.state.rovers} /> */}
        {/* <p>Time: {this.props.time}</p> */}
      </div>
    );
  }
}

export default App;