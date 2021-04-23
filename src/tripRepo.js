class TripRepo {
  constructor(info) {
    this.tripData = info
  }

  passTripById(tripId) {
    return this.tripData.find(trip => trip.id === tripId)
  }

  findTripsForAUser(userId) {
    return this.tripData.filter(trip => trip.userID === userId)
  }
}

export default TripRepo
