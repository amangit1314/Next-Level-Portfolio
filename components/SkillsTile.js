import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'

function SkillsTile({ skill, percent, icon }) {
  return (
    <div className="items-center mr-10 text-center">
      <div className="flex-1 cursor-pointer hover:bg-indigo-500 hover:text-white bg-blue-300 p-6 shadow-sm rounded-full text-left">
        <img className="h-10 w-10 rounded-full" src={icon} />
        <p className="text-gray-100 mt-4 text-sm text-center">{percent}</p>
      </div>
      <div className="mt-2">{skill}</div>
    </div>
  )
}

export default SkillsTile
