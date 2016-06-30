import React from 'react'
// to be expanded when styles
const ErrorMessageBanner = ({ errorMessage }) =>
  <div>
    {errorMessage}
  </div>

ErrorMessageBanner.propTypes = {
  errorMessage: React.PropTypes.string,
}

export { ErrorMessageBanner }
