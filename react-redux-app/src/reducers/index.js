import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../actions'

const initialState = {
  results: null,
  isLoading: false,
  error: null
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
    default:
      return state
  }
}