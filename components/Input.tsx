import React from 'react'

interface InputProps {
  id: string
  name: string
  label: string
  placeholder: string
}

const Input = ({ id, name, label, placeholder, ...props }: InputProps) => {
  return (
    <div className='w-full mb-3'>
      <label className='block text-lg' htmlFor={id}>{label}</label>
      <input
        autoCapitalize='off'
        type="text"
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-600"
        id={id}
        name={name}
        placeholder={placeholder}

        {...props}
      />
    </div>
  )
}

export default Input
