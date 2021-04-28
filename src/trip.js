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
      return destination.id === this.destinationID
    })
    if (foundDestination) {
      return foundDestination.destination
    } else {
      return 'error: Destination unknown'
    }
  }
}

export default Trip
