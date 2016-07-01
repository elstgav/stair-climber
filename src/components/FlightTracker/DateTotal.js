import React from 'react'
import moment from 'moment'

export function DateTotal({ date, total }) {
  return (
    <div className="date-total row">
      <h3>{date.format('dddd')} total:</h3>
      <p>{total} Flights</p>
      <small>(That’s {total * 13} ft!)</small>
    </div>
  )
}

DateTotal.propTypes = {
  date:  React.PropTypes.object,
  total: React.PropTypes.number,
}

DateTotal.defaultProps = {
  date:  moment(),
  total: 0,
}
