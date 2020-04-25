import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from './Select'

const items = ['Some option', 'Another option', 'Yet another option']

storiesOf('Select', module).add('Sample', () => <Select items={items} />)
