import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { desktopNavArray } from "./data/NavItems";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo-white.png";

export default function TheHeader() {
  return (
    <header className="flex flex-row w-full z-50 bg-black text-white">
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <Image
            src={clutchLogo}
            alt="Clutch Bowling"
            className="w-[300px] h-auto"
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:w-3/5 max-w-fit">
          {desktopNavArray.map((item, index) => (
            <Link key={index} href={item.linkTo}>
              {item.text}
            </Link>
          ))}
        </div>

        <div
          href="/"
          className="hidden lg:flex flex-row items-center lg:w-1/5 flex-grow justify-end"
        >
          <a href="tel:+15037797796" className="flex flex-nowrap pr-5">
            503-779-7796
          </a>
          <Link
            href="/contact"
            className="bg-blue-700 hover:bg-blue-500 transition duration-300 rounded-full px-6 py-2 uppercase"
          >
            Contact Us
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
