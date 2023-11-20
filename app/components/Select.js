"use client"
import React from "react"

export default function Select(props) {
  console.log(props)
  return (
    <div className='mb-4 w-96'>
      <label
        htmlFor='assistant'
        className='block text-sm font-medium text-gray-700'>
        Choose an assistant:
      </label>
      <select
        id='assistant'
        name='assistant'
        className='mt-1 w-full p-2 border-2 border-neutral-00 rounded-md'>
        {props.assistants.map((assistant) => (
          <option
            value={assistant.id}
            key={assistant.id}
            className='py-1'>
            {assistant.name}
          </option>
        ))}
      </select>
    </div>
  )
}
