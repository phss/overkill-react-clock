import * as React from 'react'
import { ClosablePanelProps } from './types'

export const ClosablePanel = ({ open, children }: ClosablePanelProps) => {
  const stateClass = open ? 'open' : 'closed'
  const classes = `closable-panel ${stateClass}`

  return <div className={classes}>{children}</div>
}
