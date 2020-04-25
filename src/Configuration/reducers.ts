import { ConfigurationState } from './types'

const initialState = {
  format: 'HH:mm:ss'
}

export const configurationReducer = (
  state: ConfigurationState = initialState,
  action: any
): ConfigurationState => {
  return state
}

export default configurationReducer
