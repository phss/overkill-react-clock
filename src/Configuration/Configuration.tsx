import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'
import { useDispatch } from 'react-redux'
import { updateFormat } from './actions'
import moment from 'moment'
import 'moment-timezone'

export const Configuration = () => {
  const dispatch = useDispatch()
  const formats = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']
  const timezones = moment.tz.names()
  const onSelection = (selected: string) => dispatch(updateFormat(selected))

  return (
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <Select name="Format" items={formats} onSelection={onSelection} />
      <Select name="Timezone" items={timezones} onSelection={console.log} />
    </ClosablePanel>
  )
}
