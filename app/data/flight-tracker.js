import moment from 'moment'
const DATE_FORMAT = 'YYYY-MM-DD'

export default class FlightTracker {
  constructor() {
    this.store = new Map()
  }

  get(date=moment()) {
    return this.store.get(date.format(DATE_FORMAT)) || 0
  }

  set(date=moment(), flights=0) {
    if (flights < 0) flights = 0;
    this.store.set(date.format(DATE_FORMAT), flights)
    return self
  }

  add(date=moment(), flights=1) {
    let newFlights = this.get(date) + flights
    this.set(date, newFlights)
    return self
  }

  subtract(date=moment(), flights=1) {
    let newFlights = this.get(date) - flights
    this.set(date, newFlights)
    return self
  }

  total() {
    let flightTotal = 0
    this.store.forEach((val) => flightTotal += val)
    return flightTotal
  }
}
