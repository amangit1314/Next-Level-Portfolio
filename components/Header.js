import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/solid";


function Header() {
  return (
    <div>
      <header className="">
        <HeaderItem title="Home" Icon={HomeIcon} />

        <Image
          className="object-contain"
          width={200}
          height={100}
          alt="Hulu logo"
          src="https://links.papareact.com/ua6"
        />
      </header>
    </div>
  );
}

export default Header;
