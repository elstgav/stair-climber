import React from 'react'

export function Icon({ name, className, ...props }) {
  function classes() {
    const iconClasses = ['icon', `ion-${name}`]
    if (className) iconClasses.push(className)
    return iconClasses.join(' ')
  }

  return (
    <span {...props} className={classes()} aria-hidden="true" />
  )
}

Icon.propTypes = {
  name:      React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
}
