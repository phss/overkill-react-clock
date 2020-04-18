import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Clock } from './Clock'
import { Configuration } from './Configuration'
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
    <Configuration />
  </div>
)
