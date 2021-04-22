class User {
  constructor (info) {
    this.id = info.id;
    this.name = info.name;
    this.travelerType = info.travelerType;
    this.trips = []
  }
}

export default User
