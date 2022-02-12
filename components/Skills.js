import React from 'react'
import SkillsTile from './SkillsTile'

function Skills() {
  return (
    <div>
      <section
        id="skills-sect"
        className="h-auto w-100 flex flex-row justify-between"
      >
        <div className="skills-left flex flex-1 flex-col">
          <div className="title  ml-24 w-4/12 font-semibold mt-8 text-4xl text-white-500 ">
            Skills & Experience
          </div>
          <div className="w-7/12 mt-12 ml-24 text-xl text-gray-400">
            I have been working on mobile and web technologies from past two
            years and have build some awesome looking experiences and
            applications
          </div>
        </div>
        <div className="skills-right flex mt-8 bg-gray-50 h-50 w-12/12 relative flex-1 object-fill rounded ml-12 mr-24 h-0">
          <div className="flex flex-col flex-1">
            <SkillsTile />
            <SkillsTile />
          </div>
          <div className="flex flex-col flex-1">
            <SkillsTile />
            <SkillsTile />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
