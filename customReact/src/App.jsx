import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15;
  function increment(){
    counter += 1;
    console.log('Counter:', counter);
  }
  return (
    <>
      <h1>Vite + React {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increment()}>Increment</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
