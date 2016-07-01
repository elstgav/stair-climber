import React from 'react'
import moment from 'moment'

import { Icon } from 'src/components'

const DatePicker = ({ selected, onChange }) => {
  function isToday(date) {
    return date.isSame(moment(), 'day')
  }

  function onPrevDay() {
    const newDate = selected.clone().subtract(1, 'days')
    onChange(newDate)
  }

  function onNextDay() {
    if (isToday(selected)) return

    const newDate = selected.clone().add(1, 'days')
    onChange(newDate)
  }

  function onTodayClicked() {
    onChange(moment())
  }

  return (
    <div>
      <div className="input-group">
        <button className="btn btn-secondary" onClick={onPrevDay}>
          <Icon name="chevron-left" />
        </button>
        <span> {selected.format('ddd, MMM D')} </span>
        <button className="btn btn-secondary" onClick={onNextDay} disabled={isToday(selected)}>
          <Icon name="chevron-right" />
        </button>
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
