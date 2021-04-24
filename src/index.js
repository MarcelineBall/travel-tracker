// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import domDisplay from './dom-display.js'
import TripRepo from './tripRepo.js';
import Trip from './trip.js';
import User from './user.js';

const tripPlannerSection = document.querySelector('#tripPlanner')
let tripRepo
let users
let destinations

window.addEventListener('load', loadDataFromAPI);

function getUsers() {
  fetch('http://localhost:3001/api/v1/travelers')
    .then(response => errorCheck(response))
    .then(data => users = data)
    .catch(error => errorCheck(error))
}

function getTrips() {
  fetch('http://localhost:3001/api/v1/trips')
    .then(response => errorCheck(response))
    .then(data => tripRepo = new TripRepo(data))
    .catch(error => errorCheck(error))
}

function getDestinations() {
  fetch('http://localhost:3001/api/v1/destinations')
    .then(response => errorCheck(response))
    .then(data => destinations = data)
    .catch(error => errorCheck(error))
}

function loadDataFromAPI() {
  Promise.all([getUsers(),getTrips(),getDestinations()])
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function errorCheck(response) {
  if (!response.ok) {
    tripPlannerSection.innerHTML(
      `<h1>We're sorry, there appears to be an error. Please Try again later!</h1>`)
  } else {
    return response.json()
  }
}
