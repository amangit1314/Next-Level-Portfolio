import React from 'react'

function Avatar({ src }) {
  return (
    <div className="items-center justify-center visible mb-4 text-center lg:invisible lg:h-0 lg-w-0 xl:h-0 xl:w-0 xl:invisible">
      <div className="rounded-full w-60 h-60 mx-auto bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="flex flex-col justify-between h-full p-4 bg-black rounded-full">
          <img className="h-60 w-60" src={src} />
        </div>
      </div>
    </div>
  )
}

export default Avatar
