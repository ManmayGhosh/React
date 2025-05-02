import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Tailwind using Vite</h1>
      <Card username = "MANMAY" post = "UPPER" imgURL = "https://images.pexels.com/photos/31761351/pexels-photo-31761351/free-photo-of-abstract-perspective-of-stacked-chairs-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      {/* imgURL = "https://images.pexels.com/photos/31761351/pexels-photo-31761351/free-photo-of-abstract-perspective-of-stacked-chairs-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" */}
      <Card post = "INTERMEDIATE" imgURL = "https://images.pexels.com/photos/31050184/pexels-photo-31050184/free-photo-of-aerial-view-of-spiral-staircase-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      {/* imgURL = "https://images.pexels.com/photos/31050184/pexels-photo-31050184/free-photo-of-aerial-view-of-spiral-staircase-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/> */}
      <Card />
    </>
  )
}

export default App
