import * as React from 'react'
import { Time } from './types'
import { TimeDisplay } from './TimeDisplay'
import { PartOfDay } from './PartOfDay'

export const Clock = (props: Time) => (
  <div>
    <TimeDisplay {...props} />
    <PartOfDay {...props} />
  </div>
)
