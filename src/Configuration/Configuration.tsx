import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import 'moment-timezone'
import { Format } from './types'
import { updateFormat, updateTimezone } from './actions'
import './Configuration.css'

const formats: Format[] = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']

export const Configuration = () => {
  const dispatch = useDispatch()
  const timezones = moment.tz.names()
  const initialTimezone = moment.tz.guess()

  const onFormatSelection = (selected: string) =>
    dispatch(updateFormat(selected as Format))
  const onTimezoneSelection = (selected: string) =>
    dispatch(updateTimezone(selected))

  return (
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <Select name="Format" items={formats} onSelection={onFormatSelection} />
      <Select
        name="Timezone"
        items={timezones}
        selected={initialTimezone}
        onSelection={onTimezoneSelection}
      />
    </ClosablePanel>
  )
}
