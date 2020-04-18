import * as React from 'react'
import { Time } from './types'
import './Clock.css'
import './PartOfDay.css'

const partAt = (time: Date) => {
  const hour = time.getHours()

  if (hour >= 5 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon'
  } else if (hour >= 17 && hour < 21) {
    return 'evening'
  }
  return 'night'
}

export const PartOfDay = ({ time }: Time) => (
  <p className="partOfDay">It is {partAt(time)}</p>
)
