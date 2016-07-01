import React from 'react'
import moment from 'moment'

const DatePicker = ({ selected, onChange }) => {
  function onPrevDay() {
    const newDate = selected.clone().subtract(1, 'days')
    onChange(newDate)
  }

  function onNextDay() {
    const newDate = selected.clone().add(1, 'days')
    onChange(newDate)
  }

  function onTodayClicked() {
    onChange(moment())
  }

  return (
    <div>
      <div className="input-group">
        <button className="btn btn-secondary" onClick={onPrevDay}>&lt;</button>
        <span> {selected.format('ddd, MMM D')} </span>
        <button className="btn btn-secondary" onClick={onNextDay}>&gt;</button>
      </div>

      <button onClick={onTodayClicked}>Today</button>
    </div>
  )
}

DatePicker.propTypes = {
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
}

DatePicker.defaultProps = {
  selected: moment(),
  onChange() {},
}

export { DatePicker }
