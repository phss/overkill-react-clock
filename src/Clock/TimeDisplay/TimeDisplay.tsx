import * as React from 'react'
import moment from 'moment'
import './TimeDisplay.css'

interface TimeDisplayProps {
  time: Date
}

export const TimeDisplay = ({ time }: TimeDisplayProps) => (
  <p className="clock">{moment(time).format('HH:mm:ss')}</p>
)
