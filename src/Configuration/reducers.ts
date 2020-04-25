import { ConfigurationState } from './types'
import { AnyAction } from 'redux'
import moment from 'moment'
import 'moment-timezone'

const initialState = {
  format: 'HH:mm:ss',
  timezone: moment.tz.guess()
}

export const configurationReducer = (
  state: ConfigurationState = initialState,
  action: AnyAction
): ConfigurationState => {
  switch (action.type) {
    case 'UPDATE_FORMAT':
      return { ...state, format: action.format }
    case 'UPDATE_TIMEZONE':
      return { ...state, timezone: action.timezone }
    default:
      return state
  }
}

export default configurationReducer
