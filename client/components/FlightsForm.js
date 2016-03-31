import React from 'react'

const FlightsForm = React.createClass({
  propTypes: {
    homeFloor: React.PropTypes.number,
    value:     React.PropTypes.number,
    onChange:  React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      homeFloor: 1,
      value: 0,
      onChange() {}
    }
  },

  onFlightsChanged(event) {
    let flights = parseFloat(event.target.value)
    this.props.onChange(flights)
  },

  onAddDefaultFlights() {
    this.props.onChange(this.props.value + this.props.homeFloor)
  },

  render() {
    return (
      <div>
        <input
          type='number'
          value={this.props.value}
          onChange={this.onFlightsChanged}
        />
        <button onClick={this.onAddDefaultFlights}>
          Add {this.props.homeFloor} flights
        </button>
        <p>{this.props.value * 13} ft</p>
      </div>
    )
  }
})

export default FlightsForm
