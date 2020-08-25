import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_VACATION
} from '../types'

const initialState = {
  vacations: null,
  loading: false,
}

export default function vacationReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state, loading: true
      }
    case FETCH_VACATION:
      return {
        ...state, vacations: action.vacation
      }
    case FETCH_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case FETCH_SUCCESS:
      return {
        ...state, loading: false
      }
    default:
      return state
  }
}

