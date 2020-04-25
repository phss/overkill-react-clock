import { ConfigurationState } from './types'
import { AnyAction } from 'redux'

const initialState = {
  format: 'HH:mm:ss'
}

export const configurationReducer = (
  state: ConfigurationState = initialState,
  action: AnyAction
): ConfigurationState => {
  switch (action.type) {
    case 'UPDATE_FORMAT':
      return { ...state, format: action.format }
    default:
      return state
  }
}

export default configurationReducer
