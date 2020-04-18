import * as React from 'react'
import { useSelector } from 'react-redux'
import { PartOfDay } from './PartOfDay'
import { TimeDisplay } from './TimeDisplay'
import { ClockState } from './types'

export const Clock = () => {
  const time: Date = useSelector((state: ClockState) => state.time)

  return (
    <div>
      <TimeDisplay time={time} />
      <PartOfDay time={time} />
    </div>
  )
}
