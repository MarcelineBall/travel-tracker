
const getUsers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

const getTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

const getDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => errorCheck(response))
    .then(data => data)
    .catch(error => errorCheck(error))
}

const loadDataFromAPI = Promise.all([getUsers, getTrips, getDestinations])
    .then(data => setVariables(data))
    .catch(error => errorCheck(error))
}

const getSingleUser = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => errorCheck(response))
    .then(data => user = new User(data))
    .then(data => loadDOM())
    .then(data => toggleDisplay())
    .catch(error => errorCheck(error))
}

const postNewTrip = (id, userId, destinationId, numTravelers, date, durationLength) => {
  fetch('http://localhost:3001/api/v1/trips', {
    method:'POST',
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
  .then(data => loadDataFromAPI())
  .then(data => loadDOM())
  .catch(error => console.log(error))
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

export {
  getUsers,
  getDestinations,
  getTrips,
  loadDataFromAPI,
  getSingleUser,
  postNewTrip
}
