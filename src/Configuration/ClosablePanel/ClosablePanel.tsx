import {
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@material-ui/core'
import * as React from 'react'
import { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'

interface ClosablePanelProps {
  title: string
  icon?: React.ReactNode
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

  return (
    <Container>
      <Button onClick={togglePanel}>{icon || title}</Button>
      <Dialog open={toggle} onClose={togglePanel}>
        <DialogTitle>
          {title}
          <IconButton onClick={togglePanel}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Container>
  )
}
