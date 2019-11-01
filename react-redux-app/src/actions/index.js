import axios from 'axios';

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const OPEN_VIDEO = "OPEN_VIDEO";

export function search(userInput) {
  return dispatch => {
    dispatch({ type: SEARCH_START })

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyDtY-c44nNeCd1tzwIAMpv-5RLpC39QBPs',
        q: userInput,
        part: 'snippet',
        type: 'video',
        maxResults: 25
      }
    })
      .then(res => {
        dispatch({ type: SEARCH_SUCCESS, payload: res.data.items })
      })
      .catch(err => {
        console.log('--- ERROR ---', err)
        dispatch({ type: SEARCH_FAIL, payload: err })
      })
  }
}

export function openVideo(currentVid) {
  return dispatch => {
    dispatch({ type: OPEN_VIDEO, payload: currentVid })
  }
}