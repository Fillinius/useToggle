import './App.css'

import useToggle from './useToggle'

function App() {
  const [state, setState] = useToggle(false)
  return (
    <div className="App">
      <header className="App-header">
        <p>{state.toString()}</p>
        <button onClick={() => setState()}>toggle</button>
        <button onClick={() => setState(false)}>false</button>
        <button onClick={() => setState(true)}>true</button>
      </header>
    </div>
  )
}

export default App
