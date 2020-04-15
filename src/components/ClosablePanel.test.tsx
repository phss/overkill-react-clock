import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { render, fireEvent } from '@testing-library/react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

describe('ClosablePanel component', () => {
  describe('className', () => {
    it('can be open', () => {
      const { container, getByText } = render(
        <ClosablePanel title="classtest" open={true}>
          Inside the panel
        </ClosablePanel>
      )
      appendCss(container)

      expect(getByText('Inside the panel')).toBeVisible()
    })

    it('can be closed', () => {
      const { container, getByText } = render(
        <ClosablePanel title="classtest" open={false}>
          Inside the panel
        </ClosablePanel>
      )
      appendCss(container)

      expect(getByText('Inside the panel')).not.toBeVisible()
    })
  })

  describe('title', () => {
    it('renders title', () => {
      const { getByText, queryByTestId } = render(
        <ClosablePanel title="Some panel" open={true} />
      )

      expect(getByText('Some panel')).toBeInTheDocument()
      expect(queryByTestId('icon')).not.toBeInTheDocument()
    })

    it('renders title with icon', () => {
      const { getByText, getByTestId } = render(
        <ClosablePanel
          title="Some panel with icon"
          icon={faCloudMoon}
          open={true}
        />
      )

      expect(getByText('Some panel with icon')).toBeInTheDocument()
      expect(getByTestId('icon')).toBeInTheDocument()
    })
  })

  describe('children', () => {
    it('renders children inside', () => {
      const { getByText } = render(
        <ClosablePanel title="childrentest" open={false}>
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
      const { container, getByText } = render(
        <ClosablePanel title="toggletest" open={true}>
          Inside the panel
        </ClosablePanel>
      )
      appendCss(container)

      fireEvent.click(getByText('toggletest'))
      expect(getByText('Inside the panel')).not.toBeVisible()
    })

    it('opens a closed panel by clicking the title', () => {
      const { container, getByText } = render(
        <ClosablePanel title="toggletest" open={false}>
          Inside the panel
        </ClosablePanel>
      )
      appendCss(container)

      fireEvent.click(getByText('toggletest'))
      expect(getByText('Inside the panel')).toBeVisible()
    })
  })

  const appendCss = (container: HTMLElement) => {
    const cssFile = readFileSync(
      resolve(__dirname, './ClosablePanel.css')
    ).toString()
    const style = document.createElement('style')
    style.type = 'text/css'
    style.append(cssFile)
    container.append(style)
  }
})
