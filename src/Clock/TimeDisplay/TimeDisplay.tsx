import * as React from 'react'
import { Time } from '../types'
import './TimeDisplay.css'

export const TimeDisplay = ({ time }: Time) => (
  <p className="clock">{time.toLocaleTimeString()}</p>
)
