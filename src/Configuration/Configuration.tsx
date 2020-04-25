import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'
import { useDispatch } from 'react-redux'
import { updateFormat } from './actions'

export const Configuration = () => {
  const dispatch = useDispatch()
  const formats = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']
  const onSelection = (selected: string) => dispatch(updateFormat(selected))

  return (
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <Select name="Format" items={formats} onSelection={onSelection} />
    </ClosablePanel>
  )
}
