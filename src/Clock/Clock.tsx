import * as React from 'react'
import { connect } from 'react-redux'
import { Time } from './types'
import { TimeDisplay } from './TimeDisplay'
import { PartOfDay } from './PartOfDay'

const ClockComponent = (props: Time) => (
  <div>
    <TimeDisplay {...props} />
    <PartOfDay {...props} />
  </div>
)

const mapStateToProps = (time: Time): Time => time

export const Clock = connect(mapStateToProps)(ClockComponent)
