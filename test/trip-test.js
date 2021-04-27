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
  let destinationData = [
    {
      id: 50,
      destination: "Denver, USA",
    },
    {
      id: 4,
      destination: "Chicago, USA",
    },
    {
      id: 12,
      destination: "Detroit, USA",
    }
  ]
  let finalData = {
    id: 134,
    userID: 1,
    destinationID: 50,
    travelers: 6,
    date: "2020/02/13",
    duration: 6,
    status:"approved",
    suggestedActivities:[],
    destinationName: "Denver, USA"
  }

  beforeEach(function() {
  trip = new Trip(tripData[0], destinationData)
  })

  it('should be a function', function() {
    expect(Trip).to.be.a('function')
  })

  it('should be an instance of Trip', function() {
    expect(trip).to.be.an.instanceof(Trip)
  })

  it('should be able to take in data', function() {
    expect(trip).to.deep.equal(finalData)
  })

  it('should be able to find a destination name by id', function() {
    expect(trip.findDestinationName(destinationData)).to.equal("Denver, USA")
  })
})
