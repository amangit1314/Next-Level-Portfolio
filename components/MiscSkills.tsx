import SkillWidget from "./skills/SkillItem";
import skillsData from "./skills/skills-data";

type Props = {
  directionLeft: boolean;
};

function MiscSkills({ directionLeft }: Props) {
  return (
    <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
      {/* tech stack text and headline */}
      <div>
        <p className="mt-12 text-base font-normal text-center ">
          Tech stack which I use
        </p>
        <p className="mt-2 mb-6 text-3xl font-semibold text-center xl:text-4xl xl:mb-24">
          Skills, Tools and Technology
        </p>
      </div>

      {/* skills grid */}
      <div className="flex justify-center items-center">
        <div className="space-x-8 flex flex-wrap">
          {skillsData.map((skill) => (
            <div key={skill.altText} className="p-8">
              <SkillWidget {...skill} directionLeft={directionLeft} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiscSkills;
