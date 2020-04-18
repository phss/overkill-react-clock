import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCog } from '@fortawesome/free-solid-svg-icons'
import { Clock } from './Clock'
import { ClosablePanel } from './Configuration/ClosablePanel'
import './App.css'

const Title = () => (
  <h1 className="title">
    <FontAwesomeIcon icon={faClock} />
    Overkill React Clock
    <FontAwesomeIcon icon={faClock} />
  </h1>
)

export const App = () => (
  <div>
    <Title />
    <Clock />
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <p>Hello there</p>
    </ClosablePanel>
  </div>
)
