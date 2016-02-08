import React from 'react'
import moment from 'moment'

const DatePicker = React.createClass({
  propTypes: {
    selected: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      selected: moment(),
      onChange() {}
    }
  },

  onPrevDay() {
    let newDate = this.props.selected.clone().subtract(1, 'days')
    this.props.onChange(newDate)
  },

  onNextDay() {
    let newDate = this.props.selected.clone().add(1, 'days')
    this.props.onChange(newDate)
  },

  onTodayClicked() {
    this.props.onChange(moment())
  },

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onPrevDay}>Previous day</button>
          <span>{this.props.selected.format('ddd, MMM D')}</span>
          <button onClick={this.onNextDay}>Next day</button>
        </div>

        <button onClick={this.onTodayClicked}>Today</button>
      </div>
    )
  }
})

export default DatePicker
