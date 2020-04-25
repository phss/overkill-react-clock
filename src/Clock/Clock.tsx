import * as React from 'react'
import { useSelector } from 'react-redux'
import { PartOfDay } from './PartOfDay'
import { TimeDisplay } from './TimeDisplay'
import { CombinedState } from '../types'

export const Clock = () => {
  const time = useSelector((state: CombinedState) => state.clock.time)
  const { format, timezone } = useSelector(
    (state: CombinedState) => state.configuration
  )

  return (
    <div>
      <TimeDisplay time={time} format={format} timezone={timezone} />
      <PartOfDay time={time} />
    </div>
  )
}
