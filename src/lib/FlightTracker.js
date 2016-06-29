import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD'
const FEET_PER_FLIGHT = 13

class PersonFlights {
  constructor() {
    this.store = new Map()
  }

  get(date = moment()) {
    return this.store.get(date.format(DATE_FORMAT)) || 0
  }

  set(date = moment(), flights = 0) {
    if (flights < 0) flights = 0
    this.store.set(date.format(DATE_FORMAT), flights)
    return self
  }

  add(date = moment(), flights = 1) {
    const newFlights = this.get(date) + flights
    this.set(date, newFlights)
    return self
  }

  subtract(date = moment(), flights = 1) {
    const newFlights = this.get(date) - flights
    this.set(date, newFlights)
    return self
  }

  totalFlights() {
    let flightTotal = 0
    this.store.forEach(val => flightTotal += val)
    return flightTotal
  }

  totalElevation() {
    return this.totalFlights() * FEET_PER_FLIGHT
  }
}


class FlightTracker {
  constructor() {
    this.store = new Map()
  }

  new(person) {
    const flightsClimbed = new PersonFlights()
    this.store.set(person.id, flightsClimbed)
    return flightsClimbed
  }

  get(person) {
    return this.store.get(person)
  }

  totalFlights() {
    let flightsTotal = 0
    this.store.forEach(val => flightsTotal += val.totalFlights())
    return flightsTotal
  }

  totalElevation() {
    return this.totalFlights() * FEET_PER_FLIGHT
  }
}

export default new FlightTracker()
