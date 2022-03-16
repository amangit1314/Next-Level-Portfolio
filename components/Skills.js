import React from 'react'
import SkillsTile from './SkillsTile'

function Skills() {
  return (
    <div className="bg-purple-600">
      <section
        id="skills-sect"
        className="flex flex-row justify-between h-screen w-100 "
      >
        <div className="flex flex-col flex-1 skills-left z-2">
          <div className="w-4/12 mt-24 ml-24 text-4xl font-semibold title text-white-500 ">
            Skills & Experience
          </div>
          <div className="w-7/12 mt-12 ml-24 text-xl text-white-400">
            I have been working on mobile and web technologies from past two
            years and have build some awesome looking experiences and
            applications
          </div>
          <div className="mt-20 ml-24">
            <span className="mb-24 font-semibold text-white text-7xl">2+</span>
            <div className="w-7/12 mt-10 text-lg">
              Years of Experience of working in Software Industry, mostly worked
              with Mobile technologies
            </div>
          </div>
        </div>
        <div className="relative flex-col items-center justify-between flex-1 object-fill h-0 pl-24 mt-24 mb-24 mr-24 rounded skills-right bg-gray-50 h-50 w-12/12">
          <div className="flex-col ml-24">
            <div className="mt-5 text-lg font-semibold text-white mb-7">
              Mobile Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png'
                }
                type={'Mobile Hybrid'}
                skill={'Flutter'}
              />
              <SkillsTile
                icon={
                  'https://thumbs.dreamstime.com/b/kotlin-icon-logo-vector-cross-platform-statically-typed-general-purpose-programming-language-type-inference-238617269.jpg'
                }
                type={'Mobile Native'}
                skill={'Kotlin'}
              />
              <SkillsTile
                icon={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L5GIawim9buDyWHonhIOxbPtt12nla1lgQ&usqp=CAU'
                }
                type={'NoSQL DB'}
                skill={'Firebase'}
              />
            </div>
          </div>
          <div className="flex-col ml-24">
            <div className="mt-16 text-lg font-semibold text-white mb-7 ">
              Web Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
                }
                type={'Web Library'}
                skill={'React.js'}
              />
              <SkillsTile
                icon={
                  'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png'
                }
                type={'Full Stack '}
                skill={'Next.js'}
              />
              <SkillsTile
                icon={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZbdaPK52q0MClGcJozC5rcPwcRq54oTdVHVL_yGjnzD1DzZG76gVOLdvkHVhpSyZ95o&usqp=CAU'
                }
                type={'Back End'}
                skill={'Node.js'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
