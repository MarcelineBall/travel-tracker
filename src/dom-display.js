let domDisplay = {

  displayTripCard(trips, element) {
    trips.forEach(trip => {
      let cardHTML =
      `
      <article>
      <p>Trip number: ${trip.id}</p></br>
      <p>Destination: ${trip.destinationID}</p></br>
      <p>Departure: ${trip.date}</p></br>
      <p>Travelers: ${trip.travelers}</p></br>
      <p>Status: ${trip.status}</p></br>
      </article>
      `
      element.insertAdjacentHTML('beforeend', cardHTML)
    })
  }
}
export default domDisplay
