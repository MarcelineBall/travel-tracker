// const networkRequests = {
//
//   getUsers() {
//     fetch('http://localhost:3001/api/v1/travelers')
//       // .then(response => errorCheck(response))
//       // .then(data => users = data)
//       .catch(error => errorCheck(error))
//   },
//
//   getTrips() {
//     fetch('http://localhost:3001/api/v1/trips')
//       // .then(response => errorCheck(response))
//       // .then(data => tripRepo = new TripRepo(data))
//       .catch(error => errorCheck(error))
//   },
//
//   getDestinations() {
//     fetch('http://localhost:3001/api/v1/destinations')
//       // .then(response => errorCheck(response))
//       // .then(data => destinations = data)
//       .catch(error => errorCheck(error))
//   },
//
//   loadDataFromAPI() {
//   Promise.all([networkRequests.getUsers(),networkRequests.getTrips(),networkRequests.getDestinations()])
//     .then(response => networkRequests.errorCheck(response))
//     .catch(error => console.log(error))
//   },
//
//   errorCheck(response) {
//     if (!response.ok) {
//       tripPlannerSection.innerHTML(
//         `<h1>We're sorry, there appears to be an error. Please Try again later!</h1>`)
//     } else {
//       return response.json()
//     }
//   }
// }
// export default networkRequests
