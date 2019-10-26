import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL, OPEN_VIDEO } from '../actions'

const initialState = {
  results: null,
  isLoading: false,
  error: null,
  isVideo: false,
  currentVid: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        results: [...action.payload],
        isLoading: false
      }
    case SEARCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case OPEN_VIDEO:
      console.log('OPEN_VIDEO called. payload: ', action.payload)
      return {
        ...state,
        isVideo: true,
        currentVid: action.payload
      }
    default:
      return state
  }
}