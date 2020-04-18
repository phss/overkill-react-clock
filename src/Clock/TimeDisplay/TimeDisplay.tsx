import * as React from 'react'
import './TimeDisplay.css'

interface TimeDisplayProps {
  time: Date
}

export const TimeDisplay = ({ time }: TimeDisplayProps) => (
  <p className="clock">{time.toLocaleTimeString()}</p>
)
