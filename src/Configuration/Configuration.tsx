import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'

export const Configuration = () => {
  const formats = ['HH:mm:ss', 'hh:mm:ss A', 'HH:mm', 'hh:mm A']

  return (
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <Select name="Format" items={formats} onSelection={console.log} />
    </ClosablePanel>
  )
}
