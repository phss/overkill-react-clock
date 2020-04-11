import * as React from 'react'
import { shallow } from 'enzyme'
import { ClosablePanel } from './ClosablePanel'

describe('ClosablePanel component', () => {
  describe('className', () => {
    it('can be open', () => {
      const component = shallow(<ClosablePanel open={true} />)

      expect(component.hasClass('closable-panel')).toBeTruthy()
      expect(component.hasClass('open')).toBeTruthy()
      expect(component.hasClass('closed')).toBeFalsy()
    })

    it('can be closed', () => {
      const component = shallow(<ClosablePanel open={false} />)

      expect(component.hasClass('closable-panel')).toBeTruthy()
      expect(component.hasClass('closed')).toBeTruthy()
      expect(component.hasClass('open')).toBeFalsy()
    })
  })
})
