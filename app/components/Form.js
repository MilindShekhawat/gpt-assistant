"use client"
import { useState } from "react"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  const [validationMessage, setValidationMessage] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      setValidationMessage(`You entered: ${inputValue}`)
    } else {
      setValidationMessage("Please enter a value.")
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='my-4'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          className='border-2 border-neutral-00 rounded-md p-2 mr-2'
          placeholder='Enter something...'
        />
        <button
          type='submit'
          className='bg-blue-700 text-white px-4 py-2 rounded'>
          Submit
        </button>
      </form>
      <span className='text-green-500'>{validationMessage}</span>
    </div>
  )
}
