// import chai from 'chai';
import User from '../src/user.js'
import { expect } from 'chai'

describe('user class', function() {
  let user

  beforeEach(function() {
    user = new User()
  })

  it('should be a function', function() {
    expect(User).to.be.a('function')
  })
})
