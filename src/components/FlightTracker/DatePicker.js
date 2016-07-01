import React from 'react'
import moment from 'moment'

import { Icon } from 'src/components'

export function DatePicker({ selected, onChange }) {
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
    <div className="date-picker row">
      <button>
        <Icon name="calendar" />
      </button>
      <button onClick={onPrevDay}>
        <Icon name="chevron-left" />
      </button>
      <span className="selected-date">
        <span className="month">{selected.format('MMM')}</span>
        <span className="date">{selected.format('D')}</span>
      </span>
      <button onClick={onNextDay} disabled={isToday(selected)}>
        <Icon name="chevron-right" />
      </button>
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
