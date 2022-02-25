import React from 'react'
import SkillsTile from './SkillsTile'

function Skills() {
  return (
    <div className="bg-pink-600">
      <section
        id="skills-sect"
        className="h-screen w-100 flex flex-row justify-between "
      >
        <div className="skills-left flex flex-1 flex-col z-2">
          <div className="title  ml-24 mt-24 w-4/12 font-semibold  text-4xl text-white-500 ">
            Skills & Experience
          </div>
          <div className="w-7/12 mt-12 ml-24 text-xl text-white-400">
            I have been working on mobile and web technologies from past two
            years and have build some awesome looking experiences and
            applications
          </div>
          <div className="ml-24 mt-20">
            <span className="font-semibold text-white text-7xl mb-24">2+</span>
            <div className="text-lg w-7/12 mt-10">
              Years of Experience of working in Software Industry, mostly worked
              with Mobile technologies
            </div>
          </div>
        </div>
        <div className="skills-right  flex-col  mt-24 mb-24 bg-gray-50 h-50 w-12/12 relative flex-1 object-fill rounded ml-12 justify-between mr-24 h-0">
          <div className="flex-col">
            <div className="text-lg text-white font-semibold mb-7 mt-5">
              Mobile Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png'
                }
                percent={'90%'}
                skill={'Flutter'}
              />
              <SkillsTile
                icon={
                  'https://thumbs.dreamstime.com/b/kotlin-icon-logo-vector-cross-platform-statically-typed-general-purpose-programming-language-type-inference-238617269.jpg'
                }
                percent={'90%'}
                skill={'Kotlin'}
              />
              <SkillsTile
                icon={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L5GIawim9buDyWHonhIOxbPtt12nla1lgQ&usqp=CAU'
                }
                percent={'70%'}
                skill={'Firebase'}
              />
            </div>
          </div>
          <div className="flex-col">
            <div className="text-lg text-white font-semibold mb-7 mt-10">
              Web Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://thumbs.dreamstime.com/b/kotlin-icon-logo-vector-cross-platform-statically-typed-general-purpose-programming-language-type-inference-238617269.jpg'
                }
                percent={'90%'}
                skill={'Kotlin'}
              />
              <SkillsTile
                icon={
                  'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png'
                }
                percent={'80%'}
                skill={'Next.js'}
              />
              <SkillsTile
                icon={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L5GIawim9buDyWHonhIOxbPtt12nla1lgQ&usqp=CAU'
                }
                percent={'70%'}
                skill={'Firebase'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
