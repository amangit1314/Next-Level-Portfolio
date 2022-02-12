import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'

function SkillsTile({ skill, desc, icon }) {
  return (
    <div className="flex-1 cursor-pointer hover:bg-pink-500 hover:text-white bg-gray-900 p-6 m-6 shadow-lg rounded-lg text-left">
      <BeakerIcon className="w-12 h-12 " />
      <p className="text-white-500 mt-2 text-xl">{skill}</p>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  )
}

export default SkillsTile
