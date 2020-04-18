import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export const Configuration = () => (
  <ClosablePanel title="Configuration" icon={faCog} open={false}>
    <p>Hello there</p>
  </ClosablePanel>
)
