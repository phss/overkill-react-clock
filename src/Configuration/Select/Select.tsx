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
  const selectId = name.toLowerCase().replace(' ', '_')

  return (
    <div>
      <label htmlFor={selectId}>{name}</label>
      <select id={selectId} value={selected}>
        {optionsFrom(items)}
      </select>
    </div>
  )
}
