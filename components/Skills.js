import React from 'react'
import SkillsTile from './SkillsTile'

function Skills() {
  return (
    <div className="bg-pink-600">
      <section
        id="skills-sect"
        className="h-screen w-100 flex flex-row justify-between"
      >
        <div className="skills-left flex flex-1 flex-col z-2">
          <div className="title  ml-24 w-4/12 font-semibold mt-24 text-4xl text-white-500 ">
            Skills & Experience
          </div>
          <div className="w-7/12 mt-12 ml-24 text-xl text-white-400">
            I have been working on mobile and web technologies from past two
            years and have build some awesome looking experiences and
            applications
          </div>
        </div>
        <div className="skills-right flex mt-24 bg-gray-50 h-50 w-12/12 relative flex-1 object-fill rounded ml-12 mr-24 h-0">
          <div className="flex flex-col flex-1">
            <SkillsTile
              skill={'Mobile Application'}
              desc={
                'I build mobile applications using Flutter and React Native with beautiful User Interface.'
              }
              // icon={require('../assets/images/svg/Groupdribble.svg')}
            />
            <SkillsTile
              skill={'Mobile Application'}
              desc={
                'I build mobile applications using Flutter and React Native with beautiful User Interface.'
              }
              // icon={require('../assets/images/svg/Groupdribble.svg')}
            />
          </div>
          <div className="flex flex-col flex-1">
            <SkillsTile
              skill={'Mobile Application'}
              desc={
                'I build mobile applications using Flutter and React Native with beautiful User Interface.'
              }
              // icon={require('../assets/images/svg/Groupdribble.svg')}
            />
            <SkillsTile
              skill={'Mobile Application'}
              desc={
                'I build mobile applications using Flutter and React Native with beautiful User Interface.'
              }
              // icon={require('../assets/images/svg/Groupdribble.svg')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
