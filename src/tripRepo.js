import Trip from './trip.js'

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

  buildTripsForAUser(userId, destinationData) {
    const userTrips = this.tripData.trips.filter(trip => trip.userID === userId)
    const tripClasses = []
    console.log(userTrips)
    userTrips.forEach(userTrip => {
      tripClasses.push(userTrip = new Trip(userTrip, destinationData))
    })
    return tripClasses
  }

}

export default TripRepo
