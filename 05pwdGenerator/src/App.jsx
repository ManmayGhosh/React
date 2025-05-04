import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)  str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"
    
    for (let i = 0; i < length; i++)
      pass += str.charAt(Math.floor(Math.random() * str.length))
  
    setPassword(pass)
  },[length, numberAllowed, charAllowed])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  },[length, numberAllowed, charAllowed])


  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-500"
      >
        <h1
          className="text-white text-center my-3"
        >
          Password Generator
        </h1>
        <div
          className="mb-4 flex shadow overflow-hidden rounded-lg bg-white"
        >
          <input
            type='text'
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            value={Password}
            readOnly
            ref={passwordRef}
          >
          </input>
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div
          className="flex text-sm gap-x-2"
        >
          <div
            className="flex items-center gap-x-1"
          >
            <input
              className='cursor-pointer'
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label
              htmlFor="length"
            >
              Length : {length}
            </label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }
              }
              name=""
              id=""
            />
            <label
              htmlFor="number"
            >
              Numbers
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }
              }
              name=""
              id=""
            />
            <label
              htmlFor="char"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
