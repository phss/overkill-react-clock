// import * as React from 'react'
import * as React from 'react'
import { useState } from 'react'
import { ClosablePanelProps } from './types'

export const ClosablePanel = ({
  title,
  open,
  children
}: ClosablePanelProps) => {
  const [toggle, setToggle] = useState(open)
  const togglePanel = () => setToggle(!toggle)
  const stateClass = toggle ? 'open' : 'closed'
  const classes = `closable-panel ${stateClass}`

  return (
    <div className={classes}>
      <div className="title" onClick={togglePanel}>
        {title}
      </div>
      <div className="children">{children}</div>
    </div>
  )
}
