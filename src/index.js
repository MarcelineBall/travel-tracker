// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import TripRepo from "./tripRepo.js";
import Trip from "./trip.js";
import User from "./user.js";

const tripPlannerSection = document.querySelector("#tripPlanner")
let tripRepo
let users
let destinations

window.addEventListener("click", getUsers);

function getUsers() {
  fetch('http://localhost:3001/api/v1/travelers')
    .then(response => errorCheck(response))
    .then(data => users = data)
    .then(data => console.log(users))
    .catch(error => errorCheck(error))
}

function loadDataFromAPI() {

}

function errorCheck(response) {
  if (!response.ok) {
    console.log('error check error')
    tripPlannerSection.innerHTML(
      `<h1>We're sorry, there appears to be an error. Please Try again later!</h1>`)
  } else {
    console.log('error check no error')
    return response.json()
  }
}
