class Trip {
  constructor(info, destinationData) {
    this.id = info.id;
    this.userID = info.userID;
    this.destinationID = info.destinationID;
    this.travelers = info.travelers;
    this.date = info.date;
    this.duration = info.duration;
    this.status = info.status;
    this.suggestedActivities = info.suggestedActivities;
    this.destinationName = this.findDestinationName(destinationData);
  }

  findDestinationName(destinationStuff) {
    const foundDestination = destinationStuff.find(destination => {
      // console.log(destination.id)
      // console.log(this.destinationID)
      return destination.id === this.destinationID
    })
    return foundDestination.destination
  }
}

export default Trip
