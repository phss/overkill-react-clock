import * as React from 'react'

interface SelectProps {
  name: string
  items: string[]
  selected?: string
}

const optionsFrom = (items: string[]) => {
  return items.map((item, index) => <option key={index}>{item}</option>)
}

export const Select = ({ name, items, selected }: SelectProps) => {
  return (
    <div>
      <label htmlFor="blah">{name}</label>
      <select id="blah" value={selected}>
        {optionsFrom(items)}
      </select>
    </div>
  )
}
