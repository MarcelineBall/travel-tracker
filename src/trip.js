class Trip {
  constructor(info) {
    this.id = info.id;
    this.userID = info.userID;
    this.destinationID = info.destinationID;
    this.travelers = info.travelers;
    this.date = info.date;
    this.duration = info.duration;
    this.status = info.status;
    this.suggestedActivities = info.suggestedActivities;
  }
}

export default Trip
