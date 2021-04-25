let domDisplay = {

  displayTripCard(trips, element) {
    element.innerHTML = ''
    trips.forEach(trip => {
      let cardHTML =
      `
      <article class="trip-card">
      <p>Trip number: ${trip.id}</p></br>
      <p>Destination: ${trip.destinationID}</p></br>
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
    element.insertAdjacentHTML('afterend', `<p>The total for the trip will be $${price}`)
  }
}
export default domDisplay
