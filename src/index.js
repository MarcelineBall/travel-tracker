// IMPORTS
import './css/base.scss';
import domDisplay from './dom-display.js'
import TripRepo from './tripRepo.js';
import User from './user.js';
import {
  getAllData,
  getSingleUser,
  postNewTrip
} from './api-calls'

// QUERY SELECTORS
const tripPlannerSection = document.querySelector('#tripPlanner')
const tripCardDisplay = document.querySelector('#tripCardDisplay')
const userNameDisplay = document.querySelector('#userDisplay')
const moneySpentDisplay = document.querySelector('#moneySpent')
const formDestination = document.querySelector('#destination')
const formStartDate = document.querySelector('#startDate')
const formTripDuration = document.querySelector('#tripDurationInDays')
const formTavelers = document.querySelector('#numberOfTravelers')
const loginPage = document.querySelector('#loginPage')
const formUserName = document.querySelector('#userName')
const formPassword = document.querySelector('#password')
const htmlMain = document.querySelector('#main')
const userDetailsSection = document.querySelector('#userDetails')
const tripErrorDisplay = document.querySelector('#tripErrorDisplay')
let tripRepo
let users
let destinations
let user

// EVENT LISTENERS
window.addEventListener('load', loadDataFromAPI);
htmlMain.addEventListener('click', (e) => {
  buttonHandler(e)
})

// FUNCTIONS
function loadDataFromAPI() {
  getAllData()
    .then(data => setVariables(data))
}

function setVariables([userData, tripData, destinationData]) {
  users = userData;
  tripRepo = new TripRepo(tripData)
  destinations = destinationData
}

function loadDOM() {
  domDisplay.displayTripCard(tripRepo.buildTripsForAUser(user.id, destinations.destinations), tripCardDisplay)
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
  }, 0)
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
  if (e.target.id === 'loginButton') {
    e.preventDefault()
    login()
  }
}

function evaluatePrice() {
  const inputDestination = parseInt(formDestination.value)
  const inputTripDuration = parseInt(formTripDuration.value)
  const inputTravelers = parseInt(formTavelers.value)
  if (!isNaN(inputTripDuration) && !isNaN(inputTravelers)) {
    const userDestination = destinations.destinations.find(destination => {
      return destination.id === inputDestination
    })
    const sum = ((userDestination.estimatedFlightCostPerPerson * inputTravelers) + (userDestination.estimatedLodgingCostPerDay * inputTripDuration)) * 1.1
    const roundedSum = Math.round(sum * 100) / 100
    domDisplay.displayTripPrice(roundedSum, tripErrorDisplay)
  } else {
    domDisplay.displayTripPriceError(tripErrorDisplay)
  }
}

function bookTrip() {
  const inputDestination = parseInt(formDestination.value)
  const inputTripDuration = parseInt(formTripDuration.value)
  const inputTravelers = parseInt(formTavelers.value)
  const tripDate = formStartDate.value.split('-').join('/')
  if (!isNaN(inputTripDuration) && !isNaN(inputTravelers)) {
    const tripId = tripRepo.tripData.trips.length + 1
    callPostRequest(tripId, user.id, inputDestination, inputTravelers, tripDate, inputTripDuration)
    clearInputs()
    domDisplay.clearTripErrorDisplay(tripErrorDisplay)
  } else {
    domDisplay.displayTripPriceError(tripErrorDisplay)
  }
}

function callPostRequest(tripId, userId, inputDestination, inputTravelers, tripDate, inputTripDuration) {
  postNewTrip(tripId, userId, inputDestination, inputTravelers, tripDate, inputTripDuration)
    .then(data => loadDataFromAPI())
    .then(data => loadDOM())
    .then(data => logUserIn(user.id))
    .then(data => toggleDisplay())
}

function clearInputs() {
  formDestination.value = ''
  formStartDate.value = ''
  formTavelers.value = ''
  formTripDuration.value = ''
}

function login() {
  let username = formUserName.value
  let password = formPassword.value
  const userNumber = username.split('traveler')
  const userExists = users.travelers.some(user => user.id === parseInt(userNumber[1]))
  if (userExists && password === 'travel2020') {
    logUserIn(userNumber[1])
  } else {
    domDisplay.displayLoginError(loginPage)
  }
}

function logUserIn(userId) {
  getSingleUser(userId)
    .then(data => user = new User(data))
    .then(data => loadDataFromAPI())
    .then(data => loadDOM())
    .then(data => toggleDisplay())
}

function toggleDisplay() {
  domDisplay.toggleHidden(loginPage)
  domDisplay.toggleHidden(userDetailsSection)
  domDisplay.toggleHidden(tripPlannerSection)
  domDisplay.toggleHidden(tripCardDisplay)
}

// EXPORTS
export default tripPlannerSection
