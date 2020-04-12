import * as React from 'react'
import { shallow } from 'enzyme'
import { ClosablePanel } from './ClosablePanel'

describe('ClosablePanel component', () => {
  describe('className', () => {
    it('can be open', () => {
      const component = shallow(<ClosablePanel title="classtest" open={true} />)

      expect(component.hasClass('closable-panel')).toBeTruthy()
      expect(component.hasClass('open')).toBeTruthy()
      expect(component.hasClass('closed')).toBeFalsy()
    })

    it('can be closed', () => {
      const component = shallow(
        <ClosablePanel title="classtest" open={false} />
      )

      expect(component.hasClass('closable-panel')).toBeTruthy()
      expect(component.hasClass('closed')).toBeTruthy()
      expect(component.hasClass('open')).toBeFalsy()
    })
  })

  describe('title', () => {
    it('renders title', () => {
      const component = shallow(
        <ClosablePanel title="Some panel" open={true} />
      )

      expect(component.find('.title').text()).toEqual('Some panel')
    })
  })

  describe('children', () => {
    it('renders children inside', () => {
      const component = shallow(
        <ClosablePanel title="childrentest" open={false}>
          <p>This should be inside</p>
          <p>So should this</p>
        </ClosablePanel>
      )

      expect(
        component.containsAllMatchingElements([
          <p key="">This should be inside</p>,
          <p key="">So should this</p>
        ])
      ).toBeTruthy()
    })
  })

  describe('toggling', () => {
    it('closes an open panel by clicking the title', () => {
      const component = shallow(
        <ClosablePanel title="toggletest" open={true} />
      )

      component.find('.title').simulate('click')
      expect(component.hasClass('closed')).toBeTruthy()
      expect(component.hasClass('open')).toBeFalsy()
    })

    it('opens a closed panel by clicking the title', () => {
      const component = shallow(
        <ClosablePanel title="toggletest" open={false} />
      )

      component.find('.title').simulate('click')
      expect(component.hasClass('open')).toBeTruthy()
      expect(component.hasClass('closed')).toBeFalsy()
    })
  })
})