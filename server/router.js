// import express & express.router
const express = require('express');
const router = express.Router();

// test timelog function sends back time string
var timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.status(200).send(time);
};

// callback to get nasa astronomy picture of the day
// var apod = (req, res) => {
//   res.send(200).status(data);
// };

// test get req to api route
router.get('/', (req, res) => {
  res.status(200).send('Api is working!');
});

// test get req for time
router.get('/time', timeLog);

// export router
module.exports = router;