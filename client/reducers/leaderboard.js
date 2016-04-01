import {
  LEADERBOARD_FETCH_START,
  LEADERBOARD_FETCH_SUCCESS
} from '_/client/actions/leaderboard'

const initialState = {
  sync: {
    fetching: false
  },
  records: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LEADERBOARD_FETCH_START:
      return {
        ...state,
        sync: {
          ...state.sync,
          fetching: true
        }
      }

    case LEADERBOARD_FETCH_SUCCESS:
      return {
        ...state,
        sync: {
          ...state.sync,
          fetching: false
        },
        records: [...action.payload]
      }

    default:
      return state
  }
}
