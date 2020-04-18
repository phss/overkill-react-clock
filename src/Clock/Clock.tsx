import * as React from 'react'
import { Time } from './types'
import './Clock.css'

export const Clock = ({ time }: Time) => (
  <p className="clock">{time.toLocaleTimeString()}</p>
)
