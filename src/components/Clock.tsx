import * as React from 'react'

export interface ClockProps {
  time: Date
}

export const Clock = ({ time }: ClockProps) => (
  <p className="clock">{time.toLocaleTimeString()}</p>
)
