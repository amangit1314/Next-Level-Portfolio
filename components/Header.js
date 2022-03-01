import HeaderItem from './HeaderItem'

function Header() {
  return (
    <div className=" ml-24 mr-24 pt-8">
      <header className="flex justify-between">
        <a
          href="/"
          class="bg-clip-text font-bold ml-22 text-2xl text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500"
        >
          Aman
          <span> Soni</span>
        </a>

        <ul className="list-none p-0 flex">
          <li className="mr-8 ">
            <a
              className="text-purple-500 font-bold py-3 text-lg hover:bg-slate-400 cursor-pointer"
              href="#skills-sect"
            >
              Skills
            </a>
          </li>
          <li className="mr-8">
            <a
              className="text-purple-500 font-bold py-3 text-lg hover:bg-slate-400 cursor-pointer"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="mr-8 hover:bg-slate-400 font-bold cursor-pointer">
            <a className="text-purple-500 py-3 text-lg" href="#contacts">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
