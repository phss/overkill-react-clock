import { ClockState } from './Clock/types'
import { ConfigurationState } from './Configuration/types'

export interface CombinedState {
  clock: ClockState
  configuration: ConfigurationState
}
