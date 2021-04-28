let domDisplay = {

  displayTripCard(trips, element) {
    element.innerHTML = ''
    trips.forEach(trip => {
      let cardHTML =
      `
      <article class="trip-card">
      <p>Trip number: ${trip.id}</p></br>
      <p>Destination: ${trip.destinationName}</p></br>
      <p>Departure: ${trip.date}</p></br>
      <p>Travelers: ${trip.travelers}</p></br>
      <p>Status: ${trip.status}</p></br>
      </article>
      `
      element.insertAdjacentHTML('beforeend', cardHTML)
    })
  },

  displayUserName(user, element) {
    element.innerText = `${user.name}`
  },

  displayTotalMoneySpent(moneySpent, element) {
    element.innerText = `You have spent $${moneySpent}`
  },

  displayTripDestinations(destinations, element) {
    destinations.forEach(destination => {
      let destinationHTML =
      `
        <option value="${destination.id}">${destination.destination}</option>
      `
      element.insertAdjacentHTML('beforeend', destinationHTML)
    })
  },

  displayTripPrice(price, element) {
    element.innerText = `The total for the trip will be $${price}`
  },

  displayTripPriceError(element) {
    element.innerText = 'There seems to be an error. Please check the inputs and try again'
  },

  clearTripErrorDisplay(element) {
    element.innerText = ''
  },

  displayLoginError(element) {
    element.innerHTML =
    `
      <form>
        <label for="userName">User name</label>
        <input type="text" id="userName">
        <label for="password">Password</label>
        <input type="password" id="password">
        <button class="login-button" id="loginButton">Log in</button>
      </form>
    `
    element.insertAdjacentHTML('beforeend', '<h2>Matching user not found. Please check to make sure the username and password are correct and try again</h2>')
  },

  toggleHidden(element) {
    element.classList.toggle('hidden')
  },

  displayFetchError(element) {
    element.innerHTML =
      `<h1>We're sorry, there appears to be an error. Please Try again later!</h1>`
  }
}
export default domDisplay
