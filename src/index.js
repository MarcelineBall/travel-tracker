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
const tripCardDisplay = document.querySelector('#tripCardDisplay')
let tripRepo
let users
let destinations
let user

window.addEventListener('load', loadDataFromAPI);

function getUsers() {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

function getTrips() {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

function getDestinations() {
  return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

function loadDataFromAPI() {
  Promise.all([getUsers(),getTrips(),getDestinations()])
    // .then(response => errorCheck(response))
    .then(data => setVariables(data))
    .catch(error => errorCheck(error))
}

function errorCheck(response) {
  if (!response.ok) {
    tripPlannerSection.innerHTML =
      `<h1>We're sorry, there appears to be an error. Please Try again later!</h1>`
    console.log(response)
  } else {
    return response.json()
  }
}

function setVariables([userData, tripData, destinationData]) {
  users = userData;
  user = new User(users.travelers[1])
  tripRepo = new TripRepo(tripData)
  destinations = destinationData
  loadDOM()
}

function loadDOM() {
  domDisplay.displayTripCard(tripRepo.findTripsForAUser(user.id), tripCardDisplay)
}
