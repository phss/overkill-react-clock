import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Select } from './Select'

export const Configuration = () => {
  return (
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <Select
        name="Locale"
        items={['en-US', 'en-UK']}
        onSelection={console.log}
      />
    </ClosablePanel>
  )
}
