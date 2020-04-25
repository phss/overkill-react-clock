import * as React from 'react'
import moment from 'moment'
import './TimeDisplay.css'

interface TimeDisplayProps {
  time: Date
  format: string
}

export const TimeDisplay = ({ time, format }: TimeDisplayProps) => (
  <p className="clock">{moment(time).format(format)}</p>
)
