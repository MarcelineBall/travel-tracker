// import chai from 'chai';
import User from '../src/user.js'
import { expect } from 'chai'

describe('user class', function() {
  let user
  let userInfo = [
    {id: 1, name: 'Monty Python', travelerType: 'history buff'},
    {id: 2, name: 'Roger Rabbit', travelerType: 'relaxer'}
  ];
  let tripInfo = [
    {
      id: 134,
      userID: 1,
      destinationID: 50,
      travelers: 6,
      date: "2020/02/13",
      duration: 6,
      status:"approved",
      suggestedActivities:[]
    }
  ];

  beforeEach(function() {
    user = new User(userInfo[0])
  })

  it('should be a function', function() {
    expect(User).to.be.a('function')
  })

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User)
  })

  it('should be able to take in data', function() {
    expect(user.name).to.equal('Monty Python')
  })

  it('should be able to take in trips', function() {
    expect(user.trips).to.deep.equal([])
    user.trips.push(tripInfo[0])
    expect(user.trips).to.deep.equal(tripInfo)
  })
})
