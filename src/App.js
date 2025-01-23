import './App.css'

import { useToggle } from './useToggle'

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  console.log(value)

  return (
    <>
      <p>{value}</p>
      <button onClick={() => toggle()}>{value}</button>
      <button onClick={() => toggle('orange')}>Change</button>
      <button onClick={() => toggle('reset')}>Reset</button>
    </>
  )
}

export default App
