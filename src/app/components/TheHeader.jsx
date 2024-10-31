import Link from "next/link";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-icon-white.png";
import Menu from "./Menu";
import { navLinksArray } from "./data/NavItems";

export default function TheHeader() {
  return (
    <header className="fixed bg-black bg-opacity-75 top-0 flex flex-row w-full z-50">
      <nav className="w-full m-5 flex flex-row justify-between items-center px-2">
        <Link href="/">
          <Image
            src={clutchLogo}
            alt="Clutch Bowling"
            className="w-[85px] h-auto hover:ring-4 ring-secondaryBlue ring-offset-2 rounded-full p-2"
            priority
          />
        </Link>
        
          {navLinksArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                
                className="hidden lg:flex lg:text-lg xl:text-xl 2xl:text-xl hover:text-secondaryBlue transition duration-300 hover:ring-4 ring-secondaryBlue ring-offset-2 rounded-md px-2 py-4"
              >
                {item.text}
              </Link> ))}
        
        
        <Menu />
      </nav>
    </header>
  );
}
