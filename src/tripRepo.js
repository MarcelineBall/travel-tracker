import Trip from './trip.js'

class TripRepo {
  constructor(info) {
    this.tripData = info
  }

  passTripById(tripId) {
    const foundTrip = this.tripData.trips.find(trip => trip.id === tripId)
    if(foundTrip) {
      return foundTrip
    } else {
      return 'There are no trips with that id'
    }
  }

  findTripsForAUser(userId) {
    return this.tripData.trips.filter(trip => trip.userID === userId)
  }

  buildTripsForAUser(userId, destinationData) {
    const userTrips = this.tripData.trips.filter(trip => trip.userID === userId)
    const tripClasses = []
    userTrips.forEach(userTrip => {
      tripClasses.push(userTrip = new Trip(userTrip, destinationData))
    })
    return tripClasses
  }

}

export default TripRepo
