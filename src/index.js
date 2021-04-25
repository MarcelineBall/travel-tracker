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
const userNameDisplay = document.querySelector('#userDisplay')
const moneySpentDisplay = document.querySelector('#moneySpent')
const formDestination = document.querySelector('#destination')
const formStartDate = document.querySelector('#startDate')
const formTripDuration = document.querySelector('#tripDurationInDays')
const formTavelers = document.querySelector('#numberOfTravelers')
const formEstimatePrice = document.querySelector('#getPriceButton')
const formSubmit = document.querySelector('#submitButton')
let tripRepo
let users
let destinations
let user

window.addEventListener('load', loadDataFromAPI);
tripPlannerSection.addEventListener('click', (e) => {
  buttonHandler(e)
})

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
  domDisplay.displayUserName(user, userNameDisplay)
  domDisplay.displayTotalMoneySpent(calculateMoneySpent(), moneySpentDisplay)
  domDisplay.displayTripDestinations(destinations.destinations, formDestination)
}

function calculateMoneySpent() {
  const userTrips = tripRepo.findTripsForAUser(user.id)
  const costPerTrip = userTrips.map(trip => {
    const userDestination = destinations.destinations.find(destination => destination.id === trip.destinationID)
    const sum = ((userDestination.estimatedFlightCostPerPerson * trip.travelers) + (userDestination.estimatedLodgingCostPerDay * trip.duration)) * 1.1
    const roundedSum = Math.round(sum * 100) / 100
    return roundedSum
  })
  const totalCost = costPerTrip.reduce((acc, price) => {
    acc += price
    return acc
  })
  return totalCost
}

function buttonHandler(e) {
  if (e.target.id === 'getPriceButton') {
    e.preventDefault()
    evaluatePrice()
  }
  if (e.target.id === 'submitButton') {
    e.preventDefault()
    bookTrip(e)
  }
}

function evaluatePrice() {
  const inputDestination = parseInt(formDestination.value)
  const inputTripDuration = parseInt(formTripDuration.value)
  const inputTravelers = parseInt(formTavelers.value)
  const userDestination = destinations.destinations.find(destination => {return destination.id === inputDestination})
  const sum = ((userDestination.estimatedFlightCostPerPerson * inputTravelers) + (userDestination.estimatedLodgingCostPerDay * inputTripDuration)) * 1.1
  const roundedSum = Math.round(sum * 100) / 100
  domDisplay.displayTripPrice(roundedSum, getPriceButton)
}

function bookTrip() {
  console.log('test 2 3')
}
