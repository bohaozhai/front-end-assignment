// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_DATA = 'FETCH_DATA'
export const CHANGE_VALUE = 'CHANGE_VALUE'
export const SELECT_PROGRESS_BAR = 'SELECT_PROGRESS_BAR'

export const INIT_STATE = {
  activeProgressBar: 0,
  buttonValues: [],
  barValues: [],
  limit: 100
}
// ------------------------------------
// Actions
// ------------------------------------

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data: data
  }
}

export const changeProgressBarValue = (value) => {
  return {
    type: CHANGE_VALUE,
    value: value
  }
}

export const selectProgressBar = (index) => {
  return {
    type: SELECT_PROGRESS_BAR,
    progressBarIndex: index
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const progressBarDemoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        buttonValues: action.data['buttons'],
        barValues: action.data['bars'],
        limit: action.data['limit']
      })
    case CHANGE_VALUE:
      let newBarValues = Object.assign([], state.barValues)
      if ((newBarValues[state.activeProgressBar] + action.value) >= 0) {
        newBarValues[state.activeProgressBar] += action.value
      } else {
        newBarValues[state.activeProgressBar] = 0
      }
      return Object.assign({}, state, {
        barValues: newBarValues
      })
    case SELECT_PROGRESS_BAR:
      return Object.assign({}, state, {
        activeProgressBar: action.progressBarIndex
      })
    default:
      return state
  }
}

export default progressBarDemoReducer
