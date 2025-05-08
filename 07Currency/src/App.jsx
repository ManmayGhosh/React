import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/allComponents.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const doConversion = () => {
    setConvertedAmount
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(setAmount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
    >
      <div
        className="w-full"
      >
        <div
          className="w-full max-w-2xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              doConversion()
            }}
          >
            <div
              className="w-full mb-1"
            >
              <InputBox
                label = "from"
                amount = {amount}
                currencyOptions = {options}
                selectedCurrency = {from}
                onAmountChange = {(amount) => {
                  setAmount(amount)
                }}
                onCurrencyChange = {(currency) => {
                  setFrom(currency)
                }}
                // amountDisabled = false
                // currencyDisabled = false
                // className =
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
