import { useState } from 'react'

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue((prev) => (typeof value === 'boolean' ? value : !prev))
  }

  return [value, toggleValue]
}
