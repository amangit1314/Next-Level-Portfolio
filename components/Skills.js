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
        <div className="skills-right pl-24 flex-col flex-1 items-center mt-24 mb-24 bg-gray-50 h-50 w-12/12 relative object-fill rounded justify-between mr-24 h-0">
          <div className="flex-col ml-24">
            <div className="text-lg text-white font-semibold mb-7 mt-5">
              Mobile Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png'
                }
                type={'Mobile'}
                skill={'Flutter'}
              />
              <SkillsTile
                icon={
                  'https://thumbs.dreamstime.com/b/kotlin-icon-logo-vector-cross-platform-statically-typed-general-purpose-programming-language-type-inference-238617269.jpg'
                }
                type={'Native'}
                skill={'Kotlin'}
              />
              <SkillsTile
                icon={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9L5GIawim9buDyWHonhIOxbPtt12nla1lgQ&usqp=CAU'
                }
                type={'BaaS'}
                skill={'Firebase'}
              />
            </div>
          </div>
          <div className="flex-col ml-24">
            <div className="text-lg text-white font-semibold mb-7 mt-20">
              Web Technologies
            </div>
            <div className="flex">
              <SkillsTile
                icon={
                  'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
                }
                type={'Library'}
                skill={'React.js'}
              />
              <SkillsTile
                icon={
                  'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png'
                }
                type={'FSFWK'}
                skill={'Next.js'}
              />
              <SkillsTile
                icon={
                  'https://developers.redhat.com/sites/default/files/blog/2018/03/nodejs-new-pantone-black.png'
                }
                type={'BeFWS'}
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
