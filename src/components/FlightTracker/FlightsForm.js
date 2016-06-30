import React from 'react'

export function FlightsForm({ homeFloor, value, onChange }) {
  function onFlightsChanged(event) {
    const flights = parseFloat(event.target.value)
    onChange(flights)
  }

  function addFlights(flights) {
    onChange(value + flights)
  }

  function onAddDefaultFlights() {
    addFlights(homeFloor)
  }

  function addFlight() {
    addFlights(1)
  }

  function subtractFlight() {
    addFlights(-1)
  }

  return (
    <div>
      <fieldset className="input-group">
        <span className="input-group-btn">
          <button className="btn btn-secondary" onClick={subtractFlight} type="button">-</button>
        </span>
        <input type="number" className="form-control" value={value} onChange={onFlightsChanged} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" onClick={addFlight} type="button">+</button>
        </span>
      </fieldset>
      <button className="btn btn-block btn-primary" onClick={onAddDefaultFlights}>
        Add {homeFloor} flights
      </button>
      <p>{value * 13} ft</p>
    </div>
  )
}

FlightsForm.propTypes = {
  homeFloor: React.PropTypes.number,
  value:     React.PropTypes.number,
  onChange:  React.PropTypes.func.isRequired,
}

FlightsForm.defaultProps = {
  homeFloor: 1,
  value: 0,
  onChange() {},
}
