import TripRepo from '../src/tripRepo.js'
import { expect } from 'chai'

describe('trip class', function() {
  let tripRepo
  let tripData = {
    trips:
    [
      {
        id: 134,
        userID: 1,
        destinationID: 50,
        travelers: 6,
        date: "2020/02/13",
        duration: 6,
        status:"approved",
        suggestedActivities:[]
      },
      {
        id: 4,
        userID: 6,
        destinationID: 12,
        travelers: 3,
        date: "2020/05/22",
        duration: 6,
        status:"pending",
        suggestedActivities:[]
      },
      {
        id: 4,
        userID: 1,
        destinationID: 50,
        travelers: 6,
        date: "2020/02/13",
        duration: 6,
        status:"approved",
        suggestedActivities:[]
      }
    ]
  }

  beforeEach(function() {
  tripRepo = new TripRepo(tripData)
  })

  it('should be a function', function() {
    expect(TripRepo).to.be.a('function')
  })

  it('should be an instance of Trip', function() {
    expect(tripRepo).to.be.an.instanceof(TripRepo)
  })

  it('should be able to take in an array of data', function() {
    expect(tripRepo.tripData).to.deep.equal(tripData)
  })

  it('should be able to return a single trip', function() {
    expect(tripRepo.passTripById(134)).to.deep.equal(tripData.trips[0])
  })

  it('should be able to return an array of trips by userID', function() {
    expect(tripRepo.findTripsForAUser(1)).to.deep.equal([tripData.trips[0], tripData.trips[2]])
  })
})
