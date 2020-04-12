import * as React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { TimeState } from '../reducers/timeKeeper'
import { Clock, PartOfDay } from '../components'
import { TimeProps } from '../components/types'
import { ClosablePanel } from '../components/ClosablePanel'
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
    <ClosablePanel title="Configuration" open={false}>
      <p>Hello there</p>
    </ClosablePanel>
  </div>
)

const mapStateToProps = ({ time }: TimeState): TimeProps => ({ time })

export const App = connect(mapStateToProps)(AppComponent)
