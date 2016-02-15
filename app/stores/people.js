import FlightTracker from './flight-tracker'

class Person {
  constructor(data) {
    this.id        = data.id
    this.first     = data.first
    this.last      = data.last
    this.email     = data.email
    this.homeFloor = data.homeFloor

    this.flightsClimbed = FlightTracker.new(this)
  }

  get fullName() {
    return `${this.first} ${this.last}`
  }
}

class People {
  constructor() {
    this.store = new Map()
    this.nextId = 0
    this.loadFixtures()
  }

  add(person) {
    person.id = this.nextId
    this.store.set(person.id, new Person(person))
    this.nextId += 1
  }

  get(id) {
    return this.store.get(id)
  }

  getAll() {
    return [...this.store.values()]
  }

  map(fn) {
    return this.getAll().map(fn)
  }

  loadFixtures() {
    this.add({
      first:     'John',
      last:      'Doe',
      email:     'john@place.com',
      homeFloor: 15
    })

    this.add({
      first:     'Jane',
      last:      'Doe',
      email:     'jane@place.com',
      homeFloor: 13
    })

    this.add({
      first:     'Saul',
      last:      'Goodman',
      email:     'bettercall@saul.com',
      homeFloor: 11
    })
  }
}

export default new People()
