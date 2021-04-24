let domDisplay = {

  displayTripCard(trip, element) {
    let cardHTML =
    `
      <article>
      <p>Trip number: ${trip.id}</p></br>
      <p>Destination: ${}</p></br>
      <p>Departure: ${trip.date}</p></br>
      <p>Travelers: ${trip.travelers}</p></br>
      <p>Status: ${trip.status}</p></br>
      </article>
    `
    element.insertAdjacentHTML('beforeend', cardHTML)
  }
}
export default domDisplay
