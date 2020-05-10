import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'

describe('ClosablePanel component', () => {
  describe('className', () => {
    it('can be open', () => {
      const { getByText } = render(
        <ClosablePanel title="classtest" open={true}>
          Inside the panel
        </ClosablePanel>
      )

      expect(getByText('Inside the panel')).toBeVisible()
    })

    it('can be closed', () => {
      const { queryByText } = render(
        <ClosablePanel title="classtest" open={false}>
          Inside the panel
        </ClosablePanel>
      )

      expect(queryByText('Inside the panel')).not.toBeInTheDocument()
    })
  })

  describe('button', () => {
    it('renders title', () => {
      const { getByText, queryByTestId } = render(
        <ClosablePanel title="Some panel" open={false} />
      )

      expect(getByText('Some panel')).toBeInTheDocument()
      expect(queryByTestId('icon')).not.toBeInTheDocument()
    })

    it('renders title with icon', () => {
      const { queryByText, getByTestId } = render(
        <ClosablePanel
          title="Some panel with icon"
          icon={faCloudMoon}
          open={false}
        />
      )

      expect(getByTestId('icon')).toBeInTheDocument()
      expect(queryByText('Some panel with icon')).not.toBeInTheDocument()
    })
  })

  describe('children', () => {
    it('renders children inside', () => {
      const { getByText } = render(
        <ClosablePanel title="childrentest" open={true}>
          <p>This should be inside</p>
          <p>So should this</p>
        </ClosablePanel>
      )

      expect(getByText('This should be inside')).toBeInTheDocument()
      expect(getByText('So should this')).toBeInTheDocument()
    })
  })

  describe('toggling', () => {
    it('closes an open panel by clicking the title', () => {
      const { getAllByText, getByText } = render(
        <ClosablePanel title="toggletest" open={true}>
          Inside the panel
        </ClosablePanel>
      )

      fireEvent.click(getAllByText('toggletest')[0])
      expect(getByText('Inside the panel')).not.toBeVisible()
    })

    it('opens a closed panel by clicking the title', () => {
      const { getByText } = render(
        <ClosablePanel title="toggletest" open={false}>
          Inside the panel
        </ClosablePanel>
      )

      fireEvent.click(getByText('toggletest'))
      expect(getByText('Inside the panel')).toBeVisible()
    })
  })
})
