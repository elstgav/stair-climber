import FlightTracker from './FlightTracker'

class Person {
  constructor(data) {
    this.id        = data.id || 0
    this.homeFloor = data.homeFloor || 1

    this.flightsClimbed = FlightTracker.new(this)
  }

}

export default Person
