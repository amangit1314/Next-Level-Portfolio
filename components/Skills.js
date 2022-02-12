import React from 'react'

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
        <div className="skills-right grid grid-cols-1 grid-rows-2 gap-4 relative flex-1 object-fill rounded mb-24 ml-12 mr-24 h-0">
          <div className="mobile bg-yellow-300 w-9/12 mb-4 h-10  ">Mobile</div>
          <div className="Web bg-green-300 w-9/12 h-10">Web</div>
          <div className="Web bg-red-300 w-9/12 h-10">DevOps</div>
          <div className="Web bg-blue-300 w-9/12 h-10">Design</div>
        </div>
      </section>
    </div>
  )
}

export default Skills
