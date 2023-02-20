
import { motion } from "framer-motion";
type Props = {
  directionLeft: boolean;
};


function MiscSkills({ directionLeft }: Props) {
  return (
    <div className="flex flex-col items-center justify-between p-8 mx-auto my-8 max-w-7xl" >
      <h1 className="text-3xl font-bold proj-txt" > Languages & Tools </h1>
      <div className="grid grid-cols-3 gap-4 mt-12 xl:flex xl:gap-1" >
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.svgrepo.com/show/217740/android.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/next.png"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.svgrepo.com/show/217740/android.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale xl:w-32 xl:h-32"
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.svgrepo.com/show/217740/android.svg"
            alt="android"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>







      </div>
    </div>
  );
}

export default MiscSkills;

