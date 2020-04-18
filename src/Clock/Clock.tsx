import * as React from 'react'
import { Time } from './types'
import { TimeDisplay } from './TimeDisplay'
import { PartOfDay } from './PartOfDay'
import { useSelector } from 'react-redux'

export const Clock = () => {
  const time: Time = useSelector((state: Time) => state)

  return (
    <div>
      <TimeDisplay {...time} />
      <PartOfDay {...time} />
    </div>
  )
}
