import * as React from 'react'
import { TimeProps } from './types'

export const Clock = ({ time }: TimeProps) => (
  <p className="clock">{time.toLocaleTimeString()}</p>
)
