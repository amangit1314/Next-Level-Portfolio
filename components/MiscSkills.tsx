
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
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
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
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="flutter"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/next.png"
            alt="next.js"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
            alt="dart"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
            alt="github"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://www.scottbrady91.com/img/logos/tailwind.png"
            alt="tailwindcss"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://vectorified.com/images/icon-react-native-24.png"
            alt="react native"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg"
            alt="github"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
          </div>
        </a>
        <a href="https://developer.android.com" target="_blank"
          className="relative flex cursor-pointer group xl:m-2"
        >
          <motion.img
            className="object-cover w-24 h-24 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale "
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://i.pinimg.com/originals/c6/6a/d3/c66ad30b55d9395fc0413f0f14bd9730.png"
            alt="github"
            width="40"
            height="40"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
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
