import React from "react";
import Image from "next/image";
// import { BeakerIcon } from '@heroicons/react/solid'

function SkillsTile({ skill, type, icon }: any) {
  return (
    <div className="items-center mr-10 text-center">
      <div className="flex-1 p-6 text-left bg-purple-400 rounded-full shadow-sm cursor-pointer hover:bg-purple-500 hover:text-white">
        <Image
          alt=""
          height={40}
          width={40}
          className="w-10 h-10 rounded-full"
          src={icon}
        />
        <p className="w-10 mt-4 text-sm text-center text-gray-100">{type}</p>
      </div>
      <div className="mt-2">{skill}</div>
    </div>
  );
}

export default SkillsTile;
