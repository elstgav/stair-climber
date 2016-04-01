export const LEADERBOARD_FETCH_START   = 'LEADERBOARD::FETCH_START'
export const LEADERBOARD_FETCH_SUCCESS = 'LEADERBOARD::FETCH_SUCCESS'

import api from '_/src/lib/api'

function fetchStart() {
  return {
    type: LEADERBOARD_FETCH_START
  }
}

function fetchSuccess(leaderboard) {
  return {
    type: LEADERBOARD_FETCH_SUCCESS,
    payload: leaderboard
  }
}

export function fetchAll() {
  return (dispatch) => {
    dispatch(fetchStart())

    return api
      .get('/leaderboard/2016/01/')
      .then(({ data }) => dispatch(fetchSuccess(data)))
  }
}
