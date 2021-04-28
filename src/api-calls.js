import domDisplay from './dom-display.js'
import tripPlannerSection from './index.js'

const getUsers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => errorCheck(response))
    .then(data => {
      return data
    })
}

const getTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => errorCheck(response))
    .then(data => {
      return data
    })
}

const getDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => errorCheck(response))
    .then(data => {
      return data
    })
}

const getAllData = () => {
  return Promise.all([getUsers(), getTrips(), getDestinations()])
    .then(data => {
      return data
    })
    .catch(error => errorCheck(error))
}

const getSingleUser = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => errorCheck(response))
    .then(data => {
      return data
    })
    .catch(error => errorCheck(error))
}

const postNewTrip = (id, userId, destinationId, numTravelers, date, durationLength) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify({
      id: id,
      userID: userId,
      destinationID: destinationId,
      travelers: numTravelers,
      date: date,
      duration: durationLength,
      status: 'pending',
      suggestedActivities: []
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => errorCheck(response))
    .then(data => {
      return data
    })
    .catch(error => console.log(error))
}

function errorCheck(response) {
  if (!response.ok) {
    domDisplay.displayFetchError(tripPlannerSection)
    console.log(response)
  } else {
    return response.json()
  }
}

export {
  getUsers,
  getDestinations,
  getTrips,
  getAllData,
  getSingleUser,
  postNewTrip
}
