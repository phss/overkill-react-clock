import * as React from 'react'
import TickingClock from './TickingClock'
import PartOfDayContainer from './PartOfDayContainer'

export const App = () => {
  return (
    <div>
      <h1>Overkill React Clock</h1>
      <TickingClock />
      <PartOfDayContainer />
    </div>
  )
}
