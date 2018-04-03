import {
  SET_USER,
  SET_APPSTATE,
  SET_USERDATA,
  SET_REPODATA
} from '../actionTypes'
import { BLANK_STATE } from '../../utils/AppState'

const initialState = {
  username: '',
  appState: BLANK_STATE,
  userData: {},
  repos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      localStorage.setItem('username', payload)
      return {
        ...state,
        username: payload,
        repos: [...state.repos],
        userData: {
          ...state.userData
        }
      }

    case SET_APPSTATE:
      return {
        ...state,
        appState: payload,
        repos: [...state.repos],
        userData: {
          ...state.userData
        }
      }
    case SET_USERDATA:
      return {
        ...state,
        repos: [...state.repos],
        userData: {
          ...payload
        }
      }
    case SET_REPODATA:
      return {
        ...state,
        repos: [...payload],
        userData: {
          ...state.userData
        }
      }
    default:
      return {
        ...state,
        repos: [...state.repos],
        userData: {
          ...state.userData
        }
      }
  }
}
