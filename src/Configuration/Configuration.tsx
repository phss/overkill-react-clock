import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'
import { useDispatch } from 'react-redux'
import { updateFormat, updateTimezone } from './actions'
import moment from 'moment'
import 'moment-timezone'

export const Configuration = () => {
  const dispatch = useDispatch()
  const formats = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']
  const timezones = moment.tz.names()
  const initialTimezone = moment.tz.guess()
  const onFormatSelection = (selected: string) =>
    dispatch(updateFormat(selected))
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
