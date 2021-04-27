class TripRepo {
  constructor(info) {
    this.tripData = info
  }

  passTripById(tripId) {
    return this.tripData.trips.find(trip => trip.id === tripId)
  }

  findTripsForAUser(userId) {
    return this.tripData.trips.filter(trip => trip.userID === userId)
  }

}

export default TripRepo
