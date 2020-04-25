import * as React from 'react'

interface SelectProps {
  items: string[]
}

const optionsFrom = (items: string[]) => {
  return items.map((item, index) => <option key={index}>{item}</option>)
}

export const Select = ({ items }: SelectProps) => {
  return <select>{optionsFrom(items)}</select>
}
