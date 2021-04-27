import Trip from './trip.js'

class TripRepo {
  constructor(info) {
    this.tripData = info
  }

  passTripById(tripId) {
    return this.tripData.trips.find(trip => trip.id === tripId)
  }

  findTripsForAUser(userId, destinationData) {
    const userTrips = this.tripData.trips.filter(trip => trip.userID === userId)
    const tripClasses = userTrips.map(userTrip => {
      return userTrip = new Trip(userTrip, destinationData)
    })
    return tripClasses
  }

}

export default TripRepo
