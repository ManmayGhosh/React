import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Tailwind using Vite</h1>
    </>
  )
}

export default App
