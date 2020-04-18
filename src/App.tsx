import * as React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCog } from '@fortawesome/free-solid-svg-icons'
import { TimeState } from './Clock/reducers'
import { Clock, PartOfDay } from './Clock'
import { TimeProps } from './Clock/types'
import { ClosablePanel } from './Configuration/ClosablePanel'
import './App.css'

const Title = () => (
  <h1 className="title">
    <FontAwesomeIcon icon={faClock} />
    Overkill React Clock
    <FontAwesomeIcon icon={faClock} />
  </h1>
)

const AppComponent = (props: TimeProps) => (
  <div>
    <Title />
    <Clock {...props} />
    <PartOfDay {...props} />
    <ClosablePanel title="Configuration" icon={faCog} open={false}>
      <p>Hello there</p>
    </ClosablePanel>
  </div>
)

const mapStateToProps = ({ time }: TimeState): TimeProps => ({ time })

export const App = connect(mapStateToProps)(AppComponent)
