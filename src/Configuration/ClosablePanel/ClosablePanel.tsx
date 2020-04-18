import * as React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import './ClosablePanel.css'

interface ClosablePanelProps {
  title: string
  icon?: IconDefinition
  open: boolean
  children?: React.ReactNode
}

export const ClosablePanel = ({
  title,
  icon,
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
        {icon && <FontAwesomeIcon data-testid="icon" icon={icon} />}
      </div>
      <div className="children">{children}</div>
    </div>
  )
}
