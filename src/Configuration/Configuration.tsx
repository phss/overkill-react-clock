import SettingsIcon from '@material-ui/icons/Settings'
import moment from 'moment'
import 'moment-timezone'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { updateFormat, updateTimezone } from './actions'
import { ClosablePanel } from './ClosablePanel'
import { Select } from './Select'
import { Format } from './types'

const formats: Format[] = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']

interface ConfigurationProps {
  open?: boolean
}

export const Configuration = ({ open = false }: ConfigurationProps) => {
  const dispatch = useDispatch()
  const timezones = moment.tz.names()
  const initialTimezone = moment.tz.guess()

  const onFormatSelection = (selected: string) =>
    dispatch(updateFormat(selected as Format))
  const onTimezoneSelection = (selected: string) =>
    dispatch(updateTimezone(selected))

  return (
    <ClosablePanel title="Configuration" icon={<SettingsIcon />} open={open}>
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
