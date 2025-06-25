import { useState } from 'react'
import Profile from './components/Profile/Profile.jsx'
import Login from './components/Login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Video for CONTEXT API</h1>
      <Login />
      <Profile />
    </> 
  )
}

export default App
