class TripRepo {
  constructor(info) {
    this.tripData = info
  }

  passTripById(tripId) {
    return this.tripData.find(trip => trip.id === tripId)
  }
}

export default TripRepo
