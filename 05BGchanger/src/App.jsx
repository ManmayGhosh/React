import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  // const changeColor = (color) => {
  //   setColor(color)
  // }

  return (
    <>
      <div className='w-full h-screen relative duration-200' style={{ backgroundColor: color }}>
        {/* <h1 className="text-black text-4xl">Hello World</h1> */}
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl  bg-black'>
            <button onClick={() => setColor('red')}
              style={{ backgroundColor: 'red' }}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>
              RED
            </button>
            <button onClick={() => setColor('white')}
              style={{ backgroundColor: 'white' }}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>
              WHITE
            </button>
            <button onClick={() => setColor('blue')}
              style={{ backgroundColor: 'blue' }}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'>
              BLUE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
