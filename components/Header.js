function Header() {
  return (
    <header className="flex justify-between max-w-{800} ml-6 mr-6 space-x-50 md:ml-24 lg:ml-24 xl:ml-24 md:mr-24 md:pt-8 xl:max-w-full">
      <a
        href="/"
        class="bg-clip-text mt-6 font-bold text-xl md:text-2xl lg:mt-3 lg:text-2xl text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500"
      >
        Aman
        <span> Soni</span>
      </a>

      <ul className="invisible p-0 mt-3 list-none md:flex lg:felx lg:visible xl:visible xl:flex">
        <li className="mr-8 font-bold cursor-pointer hover:shadow-lg">
          <a className="py-3 text-lg text-purple-500" href="#contact">
            About
          </a>
        </li>
        <li className="mr-8 ">
          <a
            className="py-3 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            Skills
          </a>
        </li>
        <li className="mr-8">
          <a
            className="py-3 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
            href="#projects"
          >
            Projects
          </a>
        </li>

        {/* <li className="mr-8 font-bold cursor-pointer hover:shadow-lg">
          <a className="py-3 text-lg text-purple-500" href="#contact">
            Blogs
          </a>
        </li> */}
        <li className="mr-8 font-bold cursor-pointer hover:shadow-lg">
          <a className="py-3 text-lg text-purple-500" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      {/* <svg
        className="w-8 h-8 mt-3 cursor-pointer menu lg:invisible xl:invisible"
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z"
          fill="white"
        />
      </svg> */}
    </header>
  )
}

export default Header
