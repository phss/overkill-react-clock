import * as React from 'react'

interface SelectProps {
  name: string
  items: string[]
  selected?: string
  onSelection: (selected: string) => void
}

const optionsFrom = (items: string[]) => {
  return items.map((item, index) => <option key={index}>{item}</option>)
}

export const Select = ({ name, items, selected, onSelection }: SelectProps) => {
  const selectId = name.toLowerCase().replace(' ', '_')
  const onChange = (event: React.ChangeEvent<{ value: string }>) =>
    onSelection(event.target.value)

  return (
    <div>
      <label htmlFor={selectId}>{name}</label>
      <select id={selectId} value={selected} onChange={onChange}>
        {optionsFrom(items)}
      </select>
    </div>
  )
}
