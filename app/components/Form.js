"use client"
import { useState } from "react"

export default function Form(props) {
  const [inputValue, setInputValue] = useState("")
  const [validationMessage, setValidationMessage] = useState("")

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value)
  // }
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
        className='flex gap-2 my-4 w-96'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='p-2 w-full border-2 border-neutral-00 rounded-md'
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
