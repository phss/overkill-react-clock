import * as React from 'react'

interface SelectProps {
  name: string
  items: string[]
}

const optionsFrom = (items: string[]) => {
  return items.map((item, index) => <option key={index}>{item}</option>)
}

export const Select = ({ name, items }: SelectProps) => {
  return (
    <div>
      <label>{name}</label>
      <select>{optionsFrom(items)}</select>
    </div>
  )
}
