import React from 'react'

import People from 'src/lib/People'

export function UserPicker({ user, onChange }) {
  function onChangeHandler(event) {
    const personId = parseInt(event.target.value, 10)
    const person = People.get(personId)
    onChange(person)
  }

  return (
    <form className="form-inline">
      <fieldset className="form-group">
        <label htmlFor="change-user">Switch user:</label>{' '}
        <select id="change-user" className="form-control" value={user.id} onChange={onChangeHandler}>
          {People.map(person =>
            <option key={person.id} value={person.id}>{person.fullName}</option>
          )}
        </select>
      </fieldset>
    </form>
  )
}

UserPicker.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  user:     React.PropTypes.object,
}

UserPicker.defaultProps = {
  onChange() {},
  user: People.get(0),
}
