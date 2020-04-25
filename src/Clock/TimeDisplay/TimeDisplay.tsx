import * as React from 'react'
import moment from 'moment'
import 'moment-timezone'
import './TimeDisplay.css'

interface TimeDisplayProps {
  time: Date
  format: string
  timezone: string
}

export const TimeDisplay = ({ time, format, timezone }: TimeDisplayProps) => (
  <p className="clock">{moment.tz(time, timezone).format(format)}</p>
)
