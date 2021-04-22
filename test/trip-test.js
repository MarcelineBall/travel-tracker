import Trip from '../src/trip.js'
import { expect } from 'chai'

describe('trip class', function() {
  let trip
  let tripData = [
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
    }
  ]

  beforeEach(()
  trip = new Trip(tripData[0])
  })

  it('should be a function', function() {
    expect(Trip).to.be.a('function')
  })

  it('should be an instance of Trip', function() {
    expect(trip).to.be.an.instanceof(Trip)
  })

  it('should be able to take in data', function() {
    expect(trip.id).to.equal(134)
  })

})
