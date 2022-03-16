import HeaderItem from './HeaderItem'

function Header() {
  return (
    <div className="pt-8 ml-24 mr-24 ">
      <header className="sticky flex justify-between">
        <a
          href="/"
          class="bg-clip-text font-bold ml-22 text-2xl text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500"
        >
          Aman
          <span> Soni</span>
        </a>

        <ul className="flex p-0 list-none">
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
          <li className="mr-8 font-bold cursor-pointer hover:shadow-lg">
            <a className="py-3 text-lg text-purple-500" href="#contacts">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
