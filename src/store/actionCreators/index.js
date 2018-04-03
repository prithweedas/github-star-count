import {
  SET_USER,
  SET_APPSTATE,
  SET_USERDATA,
  SET_REPODATA
} from '../actionTypes'
import { LOADING_STATE, ERROR_STATE, DONE_STATE } from '../../utils/AppState'
import { BASE_URL, TOKEN } from '../../utils/Constants'
import { extractUserData, extractRepoData } from '../../utils/UtilFuncs'

export const setUser = username => {
  return dispatch => {
    dispatch({
      type: SET_USER,
      payload: username
    })
    dispatch(setAppState(LOADING_STATE))
    fetch(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${TOKEN}`
      }
    })
      .then(res => {
        if (res.status === 404) throw new Error()
        return res.json()
      })
      .then(data => dispatch(setUserData(data)))
      .then(() =>
        fetch(`${BASE_URL}/users/${username}/repos`, {
          headers: {
            Authorization: `token ${TOKEN}`
          }
        })
      )
      .then(res => res.json())
      .then(data => dispatch(setRepoData(data)))
      .then(() => dispatch(setAppState(DONE_STATE)))
      .catch(err => dispatch(setAppState(ERROR_STATE)))
  }
}

export const setUserData = data => {
  const payload = extractUserData(data)
  return {
    type: SET_USERDATA,
    payload
  }
}

export const setRepoData = data => {
  const payload = extractRepoData(data)
  return {
    type: SET_REPODATA,
    payload
  }
}

export const setAppState = appState => ({
  type: SET_APPSTATE,
  payload: appState
})
