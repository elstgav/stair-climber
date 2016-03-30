import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD'
const FEET_PER_FLIGHT = 13

const LOAD         = 'stairclimb/flights/LOAD'
const LOAD_SUCCESS = 'stairclimb/flights/LOAD_SUCCESS'
const LOAD_FAIL    = 'stairclimb/flights/LOAD_FAIL'
const ADD          = 'stairclimb/flights/ADD'

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
  }
}
