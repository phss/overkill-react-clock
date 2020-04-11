import * as React from 'react'
import { connect } from 'react-redux'
import { TimeState } from '../reducers/timeKeeper'
import { Clock, PartOfDay } from '../components'
import { TimeProps } from '../components/types'
import { ClosablePanel } from '../components/ClosablePanel'

const AppComponent = (props: TimeProps) => {
  return (
    <div>
      <h1>Overkill React Clock</h1>
      <Clock {...props} />
      <PartOfDay {...props} />
      <ClosablePanel title="Configuration" open={false}>
        <p>Hello there</p>
      </ClosablePanel>
    </div>
  )
}

const mapStateToProps = ({ time }: TimeState): TimeProps => ({ time })

export const App = connect(mapStateToProps)(AppComponent)
