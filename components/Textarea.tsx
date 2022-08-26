import React from "react"

interface TextareaProps {
    id: string
    name: string
    label: string
    placeholder: string
}

const Textarea = ({ id, name, label, placeholder, ...props }: TextareaProps) => {
    return (
        <div className='w-auto mb-3'>
            <label className='block text-lg' htmlFor={id}>{label}</label>
            <textarea
                autoCapitalize='off'
                className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-600 text-ellipsis"
                id={id}
                name={name}
                rows={5}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default Textarea