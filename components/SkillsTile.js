import React from 'react'

function SkillsTile({ skill, desc, icon }) {
  return (
    <div className="text-xl flex-1 rounded text-center">
      <img src={icon} alt="icon" className="w-12 h-12" />
      <p className="text-white-500 mt-2">{skill}</p>
      <p className="text-white-500 mt-2">{desc}</p>
    </div>
  )
}

export default SkillsTile
