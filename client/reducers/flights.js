import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD'
const FEET_PER_FLIGHT = 13

const LOAD         = 'step-up/flights/LOAD'
const LOAD_SUCCESS = 'step-up/flights/LOAD_SUCCESS'
const LOAD_FAIL    = 'step-up/flights/LOAD_FAIL'
const ADD          = 'step-up/flights/ADD'

const initialState = {
  loaded: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }

    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded:  true,
        flights: action.result
      }

    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded:  false,
        error:   action.error
      }

    default:
      return state
  }
}
